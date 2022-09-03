import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllBookings, GetAllUser } from "../apiCalls";
import DataTable from "../components/Table/Table";
import { GetAllBookingsUser, GetAllUserSucces } from "../redux/action";

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
    AllBookings: {
      AreaName: string;
      createdAt: string;
      from: number;
      parkingPlaceID: string;
      placeName: string;
      slotNo: string;
      to: number;
      updatedAt: string;
      userID: string;
      username: string;
      _id: string;
    }[];
  };
};
const AllBookingsPage = (props: Props) => {
  const { accessToken, AllBookings } = useSelector(
    (state: SelectorType) => state?.user
  );
  const dispatch = useDispatch();
  useEffect(() => {
    GetAllBookings(accessToken)
      .then((res) => {
        console.log("==>", res.data);
        dispatch(GetAllBookingsUser(res.data));
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  interface Column {
    id:
      | "_id"
      | "username"
      | "createdAt"
      | "from"
      | "to"
      | "AreaName"
      | "placeName"
      | "slotNo";
    label: string;
    minWidth?: number;
    align?: "right";
    format?: (value: number) => string;
  }

  const columns: Column[] = [
    { id: "_id", label: "Booking ID", minWidth: 170 },
    { id: "username", label: "User Name", minWidth: 100 },
    {
      id: "createdAt",
      label: "Created At",
      minWidth: 170,
    },
    {
      id: "from",
      label: "Start Time",
      minWidth: 170,
    },
    {
      id: "to",
      label: "End Time",
      minWidth: 170,
    },
    {
      id: "AreaName",
      label: "Area Name",
      minWidth: 170,
    },
    {
      id: "placeName",
      label: "Place Name",
      minWidth: 170,
    },
    {
      id: "slotNo",
      label: "Slot No",
      minWidth: 170,
    },
  ];

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <DataTable Data={AllBookings} columns={columns} />
    </div>
  );
};

export default AllBookingsPage;
