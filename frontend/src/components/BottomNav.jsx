import {
    BottomNavigation,
    BottomNavigationAction,
    Paper
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
export default function BottomNav() {
    const navigate = useNavigate();

    return (

        <Paper
            sx={{
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 1000
            }}
            elevation={6}
        >

            <BottomNavigation
                showLabels
                sx={{
                    bgcolor: "#0c1c3d"
                }}
            >

                <BottomNavigationAction
                    label="Feed"
                    onClick={() => navigate("/feed")}
                    icon={<HomeIcon sx={{ color: "white" }} />}
                />

                <BottomNavigationAction
                    label="Create"
                    onClick={() => navigate("/create")}
                    icon={
                        <AddCircleIcon
                            sx={{
                                color: "#00e5ff",
                                fontSize: 35
                            }}
                        />
                    }
                />

                <BottomNavigationAction
                    label="Profile"
                    onClick={() => navigate("/profile")}
                    icon={<PersonIcon sx={{ color: "white" }} />}
                />

            </BottomNavigation>

        </Paper>

    );
}