import { Button } from "react-bootstrap";

export default function AdminDashboard() {
    return (
        <div style={{textAlign: 'center'}}>
            <h1>Admin Dashboard</h1>
            <Button variant="primary" href="dashboard/crudproduct">Edit sản phẩm</Button>
            <Button>Edit trang Blog</Button>
        </div>
    );
}