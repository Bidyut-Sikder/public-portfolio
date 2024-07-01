import React, { useState } from "react";
import { BsUiChecksGrid } from "react-icons/bs";
import { FaHome, FaTextHeight } from "react-icons/fa";
import { FaComments, FaGg, FaHouseChimneyUser, FaWhmcs } from "react-icons/fa6";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import { removeSession } from "../Helpers/SessionHelper";
const MasterDashboard = (props) => {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const logout = () => {
    removeSession();
  };
  return (
    <>
      <section>
        <div className="min-h-screen w-full bg-[#EFEFEF]">
          <div className="w-full">
            <div className="flex w-full">
              <div className="min-h-screen w-[220px] bg-card">
                <aside>
                  {/* Navigation  */}
                  <div className="h-[calc(100vh-2rem)]   p-4 shadow-xl shadow-blue-gray-900/5">
                    <div className="mb-2 p-4">
                      {/* Logo */}
                      <div className="flex items-center justify-between border-b border-btn px-[20px] py-[15px]">
                        <img
                          src="/assets/images/logo.svg"
                          alt=""
                          className="w-[80px]"
                        />
                        <button className="p-[5px] text-[20px]">
                          <BsUiChecksGrid />
                        </button>
                      </div>
                    </div>
                    <div>
                      <Accordion
                        open={open === 1}
                        icon={
                          <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`mx-auto h-4 w-4 transition-transform ${
                              open === 1 ? "rotate-180" : ""
                            }`}
                          />
                        }
                      >
                        <div className="p-0" selected={open === 1}>
                          <AccordionHeader
                            onClick={() => handleOpen(1)}
                            className={
                              open
                                ? "border-b-0 bg-transparent p-2 text-white hover:text-white"
                                : "border-b-0 bg-transparent p-2 text-text hover:text-white"
                            }
                          >
                            <ListItemPrefix>
                              <FaHouseChimneyUser className="h-5 w-5" />
                            </ListItemPrefix>
                            <Typography
                              color=""
                              className="mr-auto font-normal "
                            >
                              Dashboard
                            </Typography>
                          </AccordionHeader>
                        </div>
                        <AccordionBody className="py-1">
                          <List className="grid gap-[12px] p-0">
                            <NavLink to={"/"} className="dashboard-list">
                              <ListItemPrefix>
                                <ChevronRightIcon
                                  strokeWidth={3}
                                  className="h-3 w-5"
                                />
                              </ListItemPrefix>
                              Home
                            </NavLink>
                            <NavLink
                              to={"/dashboard-home"}
                              className="dashboard-list"
                            >
                              <ListItemPrefix>
                                <ChevronRightIcon
                                  strokeWidth={3}
                                  className="h-3 w-5"
                                />
                              </ListItemPrefix>
                              All Items
                            </NavLink>
                          </List>
                        </AccordionBody>
                      </Accordion>
                      <Accordion
                        open={open === 2}
                        icon={
                          <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`mx-auto h-4 w-4 transition-transform ${
                              open === 1 ? "rotate-180" : ""
                            }`}
                          />
                        }
                      >
                        <div className="p-0" selected={open === 2}>
                          <AccordionHeader
                            onClick={() => handleOpen(2)}
                            className={
                              open
                                ? "border-b-0 bg-transparent p-2 text-white hover:text-white"
                                : "border-b-0 bg-transparent p-2 text-text hover:text-white"
                            }
                          >
                            <ListItemPrefix>
                              <FaTextHeight className="h-5 w-5" />
                            </ListItemPrefix>
                            <Typography
                              color=""
                              className="mr-auto font-normal "
                            >
                              Blog
                            </Typography>
                          </AccordionHeader>
                        </div>
                        <AccordionBody className="py-1">
                          <List className="grid gap-[12px] p-0">
                            <NavLink
                              to={"/create-blog"}
                              className="dashboard-list"
                            >
                              <ListItemPrefix>
                                <ChevronRightIcon
                                  strokeWidth={3}
                                  className="h-3 w-5"
                                />
                              </ListItemPrefix>
                              Create Blog
                            </NavLink>
                            <NavLink
                              to={"/all-blog/1"}
                              className="dashboard-list"
                            >
                              <ListItemPrefix>
                                <ChevronRightIcon
                                  strokeWidth={3}
                                  className="h-3 w-5"
                                />
                              </ListItemPrefix>
                              All Blog
                            </NavLink>
                          </List>
                        </AccordionBody>
                      </Accordion>
                      <Accordion
                        open={open === 3}
                        icon={
                          <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`mx-auto h-4 w-4 transition-transform ${
                              open === 1 ? "rotate-180" : ""
                            }`}
                          />
                        }
                      >
                        <div className="p-0" selected={open === 3}>
                          <AccordionHeader
                            onClick={() => handleOpen(3)}
                            className={
                              open
                                ? "border-b-0 bg-transparent p-2 text-white hover:text-white"
                                : "border-b-0 bg-transparent p-2 text-text hover:text-white"
                            }
                          >
                            <ListItemPrefix>
                              <FaTextHeight className="h-5 w-5" />
                            </ListItemPrefix>
                            <Typography
                              color=""
                              className="mr-auto font-normal "
                            >
                              Project
                            </Typography>
                          </AccordionHeader>
                        </div>
                        <AccordionBody className="py-1">
                          <List className="grid gap-[12px] p-0">
                            <NavLink
                              to={"/create-project"}
                              className="dashboard-list"
                            >
                              <ListItemPrefix>
                                <ChevronRightIcon
                                  strokeWidth={3}
                                  className="h-3 w-5"
                                />
                              </ListItemPrefix>
                              Create Project
                            </NavLink>
                            <NavLink
                              to={"/all-project/1"}
                              className="dashboard-list"
                            >
                              <ListItemPrefix>
                                <ChevronRightIcon
                                  strokeWidth={3}
                                  className="h-3 w-5"
                                />
                              </ListItemPrefix>
                              All Project
                            </NavLink>
                          </List>
                        </AccordionBody>
                      </Accordion>

                      <hr className="my-2 border-blue-gray-50" />

                      <NavLink to={"/all-message/1"}>
                        <button className="flex items-center border-b-0 bg-transparent p-2 text-white">
                          <ListItemPrefix>
                            <InboxIcon className="h-5 w-5" />
                          </ListItemPrefix>
                          Message
                        </button>
                      </NavLink>
                      <NavLink to={"/all-comment/1"}>
                        <button className="flex items-center border-b-0 bg-transparent p-2 text-white">
                          <ListItemPrefix>
                            <FaComments className="h-5 w-5" />
                          </ListItemPrefix>
                          Comments
                        </button>
                      </NavLink>
                      <NavLink to={"/all-comment"}>
                        <button className="flex items-center border-b-0 bg-transparent p-2 text-white">
                          <ListItemPrefix>
                            <FaWhmcs className="h-5 w-5" />
                          </ListItemPrefix>
                          Profile Setting
                        </button>
                      </NavLink>
                      <div>
                        <button
                          onClick={logout}
                          className="flex items-center border-b-0 bg-transparent p-2 text-white"
                        >
                          <ListItemPrefix>
                            <PowerIcon className="h-5 w-5" />
                          </ListItemPrefix>
                          Logout
                        </button>
                      </div>
                    </div>
                  </div>
                </aside>
              </div>

              <div className="w-full">
                <div className="inner-header block w-[100%] bg-white p-[30px]">
                  <div>
                    <div>
                      <p className="text-[25px] font-semibold text-btn">
                        Welcome to Dashboard
                      </p>
                    </div>
                  </div>
                </div>
                <div>{props.children}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MasterDashboard;
