import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Typography
} from "@mui/material";

import { useState } from "react";

export default function CommentModal({
  open,
  onClose,
  post,
  addComment
}) {

  const [comment, setComment] = useState("");

  const submitComment = () => {

    if (!comment.trim()) return;

    addComment(
      post._id,
      comment
    );

    setComment("");

  };

  return (

    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
    >

      <DialogTitle>
        Comments
      </DialogTitle>

      <DialogContent>

        {
          post?.comments?.map(
            (c, index) => (

              <Typography
                key={index}
                sx={{ mb: 1 }}
              >
                <b>{c.username}</b>: {c.text}
              </Typography>

            )
          )
        }

        <TextField
          fullWidth
          label="Write Comment"
          value={comment}
          onChange={(e) =>
            setComment(
              e.target.value
            )
          }
          sx={{ mt: 2 }}
        />

        <Button
          variant="contained"
          sx={{ mt: 2 }}
          onClick={submitComment}
        >
          Comment
        </Button>

      </DialogContent>

    </Dialog>
  );
}