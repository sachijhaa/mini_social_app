import { useEffect, useState } from "react";

import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
} from "@mui/material";

import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard";
import CommentModal from "../components/CommentModal";
import BottomNav from "../components/BottomNav";
import API from "../services/api";

export default function Feed() {

  const [posts, setPosts] = useState([]);
  const [image, setImage] = useState(null);
  const [text, setText] = useState("");
  const [selectedPost, setSelectedPost] = useState(null);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(true);
  const token = localStorage.getItem("token");

  const fetchPosts = async () => {
    try {
      const res = await API.get("/posts");
      setPosts(res.data);
    }
    catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);



  const createPost = async () => {

    try {

      const formData = new FormData();

      if (text) {
        formData.append("text", text);
      }

      if (image) {
        formData.append("image", image);
      }

      await API.post(
        "/posts",
        formData,
        {
          headers: {
            Authorization: token
          }
        }
      );

      setText("");
      setImage(null);

      fetchPosts();

    }
    catch (error) {
      console.log(error);
    }
  };

  const handleLike = async (id) => {

    try {

      await API.put(
        `/posts/${id}/like`,
        {},
        {
          headers: {
            Authorization: token
          }
        }
      );

      fetchPosts();

    }
    catch (error) {
      console.log(error);
    }
  };

  const openComments = (post) => {

    setSelectedPost(post);

    setOpen(true);

  };

  const addComment = async (id, text) => {

    try {

      await API.post(
        `/posts/${id}/comment`,
        { text },
        {
          headers: {
            Authorization: token
          }
        }
      );

      fetchPosts();

      setOpen(false);

    }
    catch (error) {
      console.log(error);
    }
  };

  const filteredPosts =
    posts.filter((post) =>

      post.text
        ?.toLowerCase()
        .includes(search.toLowerCase())

    );

  return (

    <Box
      sx={{
        minHeight: "100vh",
        background:
          darkMode
            ? "#041229"
            : "#f3f4f6"
      }}
    >
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Container
        maxWidth="md"
        sx={{
          mt: 3,
          pb: 10,
          minHeight: "100vh",
          background:
            darkMode
              ?
              "#08111f"
              :
              "#f5f5f5",
        }}
      >

        <Box
          display="flex"
          gap={2}
          mb={3}
        >
        </Box>

        {/* Search */}

        <Paper
          sx={{
            p: 2,
            mb: 2,
            bgcolor: 
              darkMode
                ?
                "#1f2937"
                :
                "#e5e7eb",
            borderRadius: 4
          }}
        >

          <TextField
            fullWidth
            placeholder="🔍 Search posts..."
            variant="outlined"
            sx={{
              bgcolor: "white",
              borderRadius: 2
            }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </Paper>

        {/* Categories */}

        <Box
          sx={{
            display: "flex",
            gap: 1,
            mb: 3,
            overflowX: "auto"
          }}
        >

          <Button variant="contained">
            All Posts
          </Button>

          <Button variant="outlined">
            Trending
          </Button>

          <Button variant="outlined">
            Most Liked
          </Button>

          <Button variant="outlined">
            Following
          </Button>

        </Box>

        <Box
          display="flex"
          gap={2}
          mb={3}
          overflow="auto"
        >
          {[1, 2, 3, 4, 5].map((item) => (

            <Box
              key={item}
              textAlign="center"
            >


            </Box>

          ))}
        </Box>

        {/* Create Post */}

        <Paper
          sx={{
            p: 3,
            mb: 3,
            borderRadius: 5,
            bgcolor: "#0c1c3d",
            color: "white",
            boxShadow: "0 8px 20px rgba(0,0,0,0.3)"
          }}
        >

          <Typography
            variant="h6"
            fontWeight="bold"
          >
            Create Post
          </Typography>

          <TextField
            fullWidth
            multiline
            rows={3}
            placeholder="What's on your mind?"
            value={text}
            onChange={(e) => setText(e.target.value)}
            sx={{
              mt: 2,
              bgcolor: "#162848",
              borderRadius: 2,

              "& .MuiInputBase-input": {
                color: "white"
              }
            }}
          />

          <Box
            mt={2}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >

            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setImage(e.target.files[0])
              }
            />

            <Button
              variant="contained"
              onClick={createPost}
              sx={{
                borderRadius: 5,
                px: 4
              }}
            >
              Post
            </Button>

          </Box>

        </Paper>

        {/* Posts */}

        {
          filteredPosts.map((post) => (

            <PostCard
              key={post._id}
              post={post}
              handleLike={handleLike}
              openComments={openComments}
              darkMode={darkMode}
            />

          ))
        }

      </Container>

      <CommentModal
        open={open}
        onClose={() => setOpen(false)}
        post={selectedPost}
        addComment={addComment}
      />

      {/* Floating Button */}

      <Box
        sx={{
          position: "fixed",
          bottom: 90,
          right: 25
        }}
      >

        <Button
          variant="contained"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth"
            })
          }
          sx={{
            width: 60,
            height: 60,
            borderRadius: "50%",
            fontSize: "30px",
            bgcolor: "#2563eb"
          }}
        >
          +
        </Button>

      </Box>

      <BottomNav />

    </Box>
  );
}