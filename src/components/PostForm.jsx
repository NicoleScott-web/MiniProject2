import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { PostContext } from "../context/PostContext";
import { useContext, useState } from "react";


export default function PostForm() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const { posts, postDispatch } = useContext(PostContext);
    const formSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post("http://localhost:3000/cars", {
          title,
          body,
        });
        postDispatch({ type: "addPosts", payload: response.data.result })};
return (
  <>
<Form onSubmit={formSubmit}>
<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
  <Form.Label>Title</Form.Label>
  <Form.Control
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    type="text"
  />
</Form.Group>
<Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
  <Form.Label>Body</Form.Label>
  <Form.Control
    type="text"
    value={body}
    onChange={(e) => setBody(e.target.value)}
  />
</Form.Group>
<Button type="submit">Submit</Button>
</Form>
</>
)}