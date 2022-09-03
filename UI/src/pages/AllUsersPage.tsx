import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllUser } from "../apiCalls";
import DataTable from "../components/Table/Table";
import { GetAllUserSucces } from "../redux/action";

type Props = {};
type SelectorType = {
  user: {
    accessToken: string;
    contactNo: string;
    email: string;
    errorMessage: string;
    isAdmin: boolean;
    loading: boolean;
    loginStatus: boolean;
    uid: string;
    username: string;
    AllUsers: {
      contactNo: string;
      createdAt: string;
      email: string;
      updatedAt: string;
      username: string;
    }[];
  };
};
const AllUsersPage = (props: Props) => {
  const { accessToken, AllUsers } = useSelector(
    (state: SelectorType) => state?.user
  );
  const dispatch = useDispatch();
  useEffect(() => {
    GetAllUser(accessToken)
      .then((res) => {
        console.log("==>", res.data);
        dispatch(GetAllUserSucces(res.data));
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  interface Column {
    id: "username" | "email" | "contactNo" | "createdAt";
    label: string;
    minWidth?: number;
    align?: "right";
    format?: (value: number) => string;
  }

  const columns: Column[] = [
    { id: "username", label: "User Name", minWidth: 170 },
    { id: "email", label: "Email", minWidth: 100 },
    {
      id: "contactNo",
      label: "Contact No",
      minWidth: 170,
    },
    {
      id: "createdAt",
      label: "Created At",
      minWidth: 170,
    },
  ];

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <DataTable Data={AllUsers} columns={columns} />
    </div>
  );
};

export default AllUsersPage;
