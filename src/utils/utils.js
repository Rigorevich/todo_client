import AddIcon from "@mui/icons-material/Add";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import HouseIcon from "@mui/icons-material/House";
import CategoryIcon from "@mui/icons-material/Category";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

export const headerButtons = [
  {
    id: 0,
    icon: <AddIcon />,
    titles: [
      {
        title: "New Todo",
        path: "/todos/create",
      },
      {
        title: "New Category",
        path: "/categories/create",
      },
    ],
  },
  {
    id: 1,
    icon: <AccountBoxIcon />,
    titles: [
      {
        title: "Profile",
        path: "/profile",
      },
      {
        title: "Log Out",
        path: "/login",
      },
    ],
  },
];

export const sidebarButtons = [
  {
    id: 0,
    title: "Home",
    icon: <HouseIcon />,
    path: "/",
  },
  {
    id: 1,
    title: "My Day",
    icon: <CalendarTodayIcon />,
    path: "/todos",
  },
  {
    id: 2,
    title: "Categories",
    icon: <CategoryIcon />,
    path: "/categories",
  },
  {
    id: 3,
    title: "My Profile",
    icon: <AccountBoxIcon />,
    path: "/profile",
  },
];

export const textFields = [
  {
    id: 0,
    title: "First name",
    data: "firstName",
    placeholder: "Enter first name",
  },
  {
    id: 1,
    title: "Last name",
    data: "lastName",
    placeholder: "Enter last name",
  },
  {
    id: 2,
    title: "Username",
    data: "userName",
    placeholder: "Enter username",
  },
  {
    id: 3,
    title: "Email",
    data: "email",
    placeholder: "Enter email",
  },
  {
    id: 4,
    title: "Password",
    data: "password",
    placeholder: "Enter password",
  },
];
