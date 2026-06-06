import {
  Card,
  Typography,
  Avatar,
  Box,
  IconButton,
  Button,
  Divider
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatIcon from "@mui/icons-material/Chat";
import VerifiedIcon from "@mui/icons-material/Verified";

export default function PostCard({
  post,
  handleLike,
  openComments,
  darkMode
}) {

  return (

    <Card
      sx={{
        bgcolor: 
          darkMode
            ? "#1f2937"
            : "#e5e7eb",
        color: 
          darkMode
            ? "white"
            : "black",
        borderRadius: 4,
        mb: 3,
        overflow: "hidden",
        boxShadow: "0 4px 20px rgba(0,0,0,0.25)",

        transition: "0.3s",

        "&:hover": {
          transform: "translateY(-3px)"
        }
      }}
    >

      {/* Header */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2
        }}
      >

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2
          }}
        >

          <Avatar
            sx={{
              width: 50,
              height: 50,
              bgcolor: "#2563eb",
              fontWeight: "bold"
            }}
          >
            {post.username?.charAt(0)}
          </Avatar>

          <Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5
              }}
            >

              <Typography
                fontWeight="bold"
              >
                {post.username}
              </Typography>

              <VerifiedIcon
                sx={{
                  color: "#3b82f6",
                  fontSize: 18
                }}
              />

            </Box>

            <Typography
              variant="caption"
              sx={{
                color: "#94a3b8"
              }}
            >
              Creator • Public Post • 2h ago
            </Typography>

          </Box>

        </Box>

        <Button
          variant="contained"
          size="small"
          sx={{
            ml: "auto",
            borderRadius: 10,
            textTransform: "none",
            bgcolor: "#2563eb"
          }}
        >
          Follow
        </Button>

      </Box>

      {/* Post Text */}

      {post.text && (

        <Typography
          sx={{
            px: 2,
            pb: 2,
            lineHeight: 1.8
          }}
        >
          {post.text}
        </Typography>

      )}

      {/* Post Image */}

      {post.image && (

        <img
          src={`http://localhost:5000/uploads/${post.image}`}
          alt="post"
          style={{
            width: "100%",
            maxHeight: "500px",
            objectFit: "cover"
          }}
        />

      )}

      {/* Stats */}

      <Box
        sx={{
          px: 2,
          py: 1,
          display: "flex",
          justifyContent: "space-between",
          color: "#94a3b8"
        }}
      >

        <Typography variant="body2">
          ❤️ {post.likes.length} Likes
        </Typography>

        <Typography variant="body2">
          💬 {post.comments.length} Comments
        </Typography>

      </Box>

      <Divider
        sx={{
          bgcolor: "#23345d",
          my: 2
        }}
      />

      {/* Actions */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          py: 1
        }}
      >

        <Button
          startIcon={
            <FavoriteIcon
              sx={{
                color: "#ff4d6d"
              }}
            />
          }
          onClick={() =>
            handleLike(post._id)
          }
          sx={{
            color: "white"
          }}
        >
          Like
        </Button>

        <Button
          startIcon={
            <ChatIcon
              sx={{
                color: "#ffffff"
              }}
            />
          }
          onClick={() =>
            openComments(post)
          }
          sx={{
            color: "white"
          }}
        >
          Comment
        </Button>

      </Box>

    </Card>
  );
}