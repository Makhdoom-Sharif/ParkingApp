import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllAreas, GetAllUser } from "../apiCalls";
import DataTable from "../components/Table/Table";
import {
  GetAllAreaFail,
  GetAllAreasInit,
  GetAllAreasSuccess,
  GetAllUserSucces,
} from "../redux/action";

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
    allAreas: {
      _id: string;
      AreaName: string;
      TotalPlaces: string;
      createdAt: string;
      updatedAt: string;
    }[];
  };
};
const AllParkingLots = (props: Props) => {
  const { accessToken, allAreas, uid } = useSelector(
    (state: SelectorType) => state?.user
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllAreasInit());
    GetAllAreas({ accessToken, uid })
      .then((res) => {
        dispatch(GetAllAreasSuccess(res.data));

        // dispatch(GetAllUserSucces(res.data));
      })
      .catch((e) => {
        console.log(e);
        dispatch(GetAllAreaFail());
      });
  }, []);
  interface Column {
    id: "_id" | "AreaName" | "TotalPlaces" | "createdAt" | "Action";
    label: string;
    minWidth?: number;
    align?: "right";
    format?: (value: number) => string;
  }

  const columns: Column[] = [
    { id: "_id", label: "Area ID", minWidth: 170 },
    { id: "AreaName", label: "Area Name", minWidth: 100 },
    {
      id: "TotalPlaces",
      label: "Total Places",
      minWidth: 170,
    },
    {
      id: "createdAt",
      label: "Created At",
      minWidth: 170,
    },
    {
      id: "Action",
      label: "Action",
      minWidth: 170,
    },
  ];

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <DataTable Data={allAreas} columns={columns} />
    </div>
  );
};

export default AllParkingLots;
