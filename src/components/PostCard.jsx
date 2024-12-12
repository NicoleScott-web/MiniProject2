import { Button, Card } from "react-bootstrap";
import axios from "axios";
import { useContext } from "react";
import { PostContext } from "../context/PostContext";

export default function PostCard({ id, title, body, setIsEdit }) {
  const { postDispatch } = useContext(PostContext);
  const onDeleteclick = async () => {
    const response = await axios.delete(`http://localhost:3000/cars/${id}`);
    postDispatch({ type: "deletePostById", payload: id });
  };
  const showEditView = () => {
    setIsEdit(true);
  };
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
        <Button variant="primary" onClick={showEditView}>
          Update
        </Button>
        <Button variant="danger" onClick={onDeleteclick}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}
