-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 11, 2019 at 03:49 PM
-- Server version: 10.1.29-MariaDB
-- PHP Version: 7.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sjshs`
--

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `EmployeeNum` int(11) NOT NULL,
  `LastName` varchar(255) NOT NULL,
  `FirstName` varchar(255) NOT NULL,
  `MiddleName` varchar(255) NOT NULL,
  `Birthday` date NOT NULL,
  `Age` int(3) NOT NULL,
  `Street_Address1` varchar(255) NOT NULL,
  `Street_Address2` varchar(255) NOT NULL,
  `City` varchar(255) NOT NULL,
  `Province` varchar(255) NOT NULL,
  `Country` varchar(255) NOT NULL,
  `Gender` varchar(6) NOT NULL,
  `Position` varchar(255) NOT NULL,
  `URL_Picture` varchar(255) NOT NULL,
  `DateRegistered` date NOT NULL,
  `DateCreated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`EmployeeNum`, `LastName`, `FirstName`, `MiddleName`, `Birthday`, `Age`, `Street_Address1`, `Street_Address2`, `City`, `Province`, `Country`, `Gender`, `Position`, `URL_Picture`, `DateRegistered`, `DateCreated`) VALUES
(1, 'Gabon', 'Jose Mari', 'Manuel', '1997-03-28', 22, '#4083 V. Baltazar', 'Pinagbuhatan', 'Pasig', 'Metro Manila', 'Philippines', 'Male', 'Teacher', '../pictures/employee/lulu.jpg', '2019-10-11', '2019-10-11 12:41:28'),
(2, 'Oprenario', 'Leslie Alexis', 'Manuel', '1990-03-31', 29, '23 E. Caruncho Avenue', 'Malinao', 'Pasig', 'Metro Manila', 'Philippines', 'Male', 'Teacher', '../pictures/employee/Diane_(Seven_Deadly_Sins).jpg', '2019-10-11', '2019-10-11 12:41:28'),
(3, 'Gabon', 'Carlos Miguel', 'Manuel', '2010-01-22', 9, '242 Marigold St', 'Pinagbuhatan', 'Pasig', 'Metro Manila', 'Philippines', 'Male', 'Teacher', '../pictures/employee/lulu.jpg', '2019-10-11', '2019-10-11 12:41:28'),
(4, 'Oprenario', 'Leslie Alexis', 'Manuel', '1990-03-31', 29, '23 E. Caruncho Ave,', 'Malinao', 'Pasig City', 'Metro Manila', 'Philippines', 'Male', 'Teacher', '../pictures/employee/401251_393070170706909_1000554163_n.jpg', '2019-10-11', '2019-10-11 12:41:28'),
(5, 'Gabon', 'Jose', 'Manuel', '1997-03-28', 22, '242 Marigold St', 'Pinagbuhatan', 'Pasig', 'Metro Manila', 'Philippines', 'Male', 'Teacher', '../pictures/employee/407093_355692657777994_1875201973_n.jpg', '2019-10-11', '2019-10-11 12:41:28');

--
-- Triggers `employee`
--
DELIMITER $$
CREATE TRIGGER `AFTER INSERT employee` AFTER INSERT ON `employee` FOR EACH ROW BEGIN
INSERT INTO teacher(EmployeeNum, Name) SELECT EmployeeNum, CONCAT(LastName , ", " , FirstName, " " , LEFT(MiddleName, 1), ".") FROM employee WHERE New.Position = "Teacher" ORDER BY EmployeeNum DESC LIMIT 1;
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `backup employee` BEFORE DELETE ON `employee` FOR EACH ROW INSERT INTO employee_backup
SELECT * FROM employee
WHERE EmployeeNum = old.EmployeeNum
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `backup employee UPDATE` BEFORE UPDATE ON `employee` FOR EACH ROW INSERT INTO employee_backup
SELECT * FROM employee
WHERE EmployeeNum = old.EmployeeNum
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `employee_backup`
--

CREATE TABLE `employee_backup` (
  `EmployeeNum` int(11) NOT NULL,
  `LastName` varchar(255) NOT NULL,
  `FirstName` varchar(255) NOT NULL,
  `MiddleName` varchar(255) NOT NULL,
  `Birthday` date NOT NULL,
  `Age` int(3) NOT NULL,
  `Street_Address1` varchar(255) NOT NULL,
  `Street_Address2` varchar(255) NOT NULL,
  `City` varchar(255) NOT NULL,
  `Province` varchar(255) NOT NULL,
  `Country` varchar(255) NOT NULL,
  `Gender` varchar(6) NOT NULL,
  `Position` varchar(255) NOT NULL,
  `URL_Picture` varchar(255) NOT NULL,
  `DateRegistered` date NOT NULL,
  `DateCreated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `room`
--

CREATE TABLE `room` (
  `RoomNum` int(11) NOT NULL,
  `RoomName` varchar(255) DEFAULT NULL,
  `Floor` int(2) NOT NULL,
  `Capacity` int(2) NOT NULL,
  `Type` varchar(255) NOT NULL,
  `DateCreated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `room`
--

INSERT INTO `room` (`RoomNum`, `RoomName`, `Floor`, `Capacity`, `Type`, `DateCreated`) VALUES
(103, 'Computer Department', 1, 15, 'Office', '2019-10-11 11:16:48'),
(104, 'Electrical Department', 1, 15, 'Office', '2019-10-11 11:16:48'),
(105, 'Electronics Department', 1, 15, 'Office', '2019-10-11 11:16:48'),
(107, 'Einstein', 1, 40, 'Classroom', '2019-10-11 11:16:48'),
(108, 'Curie', 1, 40, 'Classroom', '2019-10-11 11:16:48'),
(109, 'Copenhagen', 1, 40, 'Classroom', '2019-10-11 11:16:48'),
(110, 'Newton', 1, 40, 'Classroom', '2019-10-11 11:16:48'),
(111, 'Hawkin', 1, 40, 'Classroom', '2019-10-11 11:16:48'),
(112, '112', 1, 5, 'Classroom', '2019-10-11 11:53:02'),
(200, 'Aristotle', 2, 40, 'Classroom', '2019-10-11 11:16:48'),
(201, 'Plato', 2, 40, 'Classroom', '2019-10-11 11:16:48'),
(202, 'Socrates', 2, 40, 'Classroom', '2019-10-11 11:16:48'),
(203, 'Edison', 2, 40, 'Classroom', '2019-10-11 11:16:48'),
(204, 'Tesla', 2, 40, 'Classroom', '2019-10-11 11:16:48'),
(205, '205', 2, 40, 'Classroom', '2019-10-11 11:16:48'),
(303, '303', 3, 40, 'Classroom', '2019-10-11 11:16:48'),
(304, '304', 3, 40, 'Classroom', '2019-10-11 11:16:48'),
(305, '305', 3, 40, 'Classroom', '2019-10-11 11:16:48');

--
-- Triggers `room`
--
DELIMITER $$
CREATE TRIGGER `AFTER UPDATE room` AFTER UPDATE ON `room` FOR EACH ROW BEGIN
UPDATE section SET RoomNum = NULL WHERE RoomNum IN (SELECT RoomNum FROM room WHERE Type <> "Classroom");
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `backup room` BEFORE DELETE ON `room` FOR EACH ROW BEGIN
INSERT INTO room_backup 
SELECT * FROM room 
WHERE RoomNum = old.RoomNum;
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `backup room UPDATE` BEFORE UPDATE ON `room` FOR EACH ROW INSERT INTO room_backup 
SELECT * FROM room 
WHERE RoomNum = old.RoomNum
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `room_backup`
--

CREATE TABLE `room_backup` (
  `RoomNum` int(11) NOT NULL,
  `RoomName` varchar(255) DEFAULT NULL,
  `Floor` int(2) NOT NULL,
  `Capacity` int(2) NOT NULL,
  `Type` varchar(255) NOT NULL,
  `DateCreated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `room_backup`
--

INSERT INTO `room_backup` (`RoomNum`, `RoomName`, `Floor`, `Capacity`, `Type`, `DateCreated`) VALUES
(100, '100', 1, 5, 'Classroom', '2019-10-11 13:07:29'),
(102, 'Civil Department', 1, 14, 'Office', '2019-10-11 13:03:32');

-- --------------------------------------------------------

--
-- Table structure for table `sched`
--

CREATE TABLE `sched` (
  `SubjectID` varchar(255) NOT NULL,
  `SubjectTime` varchar(13) NOT NULL,
  `SubjectDay` varchar(10) NOT NULL,
  `DateCreated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sched`
--

INSERT INTO `sched` (`SubjectID`, `SubjectTime`, `SubjectDay`, `DateCreated`) VALUES
('26-SCI7A', '6:00-7:00', 'Monday', '2019-10-11 11:24:06'),
('26-SCI7A', '6:00-7:00', 'Wednesday', '2019-10-11 11:24:06'),
('26-SCI7A', '6:00-7:00', 'Friday', '2019-10-11 11:24:06'),
('26-ENG7', '7:00-8:00', 'Tuesday', '2019-10-11 11:24:06'),
('26-ENG7', '7:00-8:00', 'Wednesday', '2019-10-11 11:24:06'),
('26-ENG7', '7:00-8:00', 'Friday', '2019-10-11 11:24:06'),
('26-AP7', '7:00-8:00', 'Thursday', '2019-10-11 11:24:06'),
('26-RESEARCH7', '7:00-8:00', 'Monday', '2019-10-11 11:24:06'),
('26-MATH7A', '8:00-9:00', 'Monday', '2019-10-11 11:24:06'),
('26-MATH7A', '8:00-9:00', 'Friday', '2019-10-11 11:24:06'),
('26-RESEARCH7', '8:00-9:00', 'Tuesday', '2019-10-11 11:24:06'),
('26-RESEARCH7', '8:00-9:00', 'Wednesday', '2019-10-11 11:24:06'),
('26-RESEARCH7', '8:00-9:00', 'Thursday', '2019-10-11 11:24:06'),
('26-MATH7B', '9:20-10:20', 'Monday', '2019-10-11 11:24:06'),
('26-MATH7B', '9:20-10:20', 'Tuesday', '2019-10-11 11:24:06'),
('26-MATH7B', '9:20-10:20', 'Wednesday', '2019-10-11 11:24:06'),
('26-MATH7B', '9:20-10:20', 'Thursday', '2019-10-11 11:24:06'),
('26-AP7', '9:20-10:20', 'Friday', '2019-10-11 11:24:06'),
('26-ENG7', '10:20-11:20', 'Monday', '2019-10-11 11:24:06'),
('26-ESP7', '10:20-11:20', 'Tuesday', '2019-10-11 11:24:06'),
('26-MATH7A', '10:20-11:20', 'Wednesday', '2019-10-11 11:24:06'),
('26-AP7', '10:20-11:20', 'Thursday', '2019-10-11 11:24:06'),
('26-FIL7', '10:20-11:20', 'Friday', '2019-10-11 11:24:06'),
('26-SCI7B', '11:20-12:20', 'Monday', '2019-10-11 11:24:06'),
('26-SCI7B', '11:20-12:20', 'Tuesday', '2019-10-11 11:24:06'),
('26-SCI7B', '11:20-12:20', 'Wednesday', '2019-10-11 11:24:06'),
('26-SCI7B', '11:20-12:20', 'Friday', '2019-10-11 11:24:06'),
('26-ESP7', '11:20-12:20', 'Thursday', '2019-10-11 11:24:06'),
('26-MAPEH7', '1:00-2:00', 'Monday', '2019-10-11 11:24:06'),
('26-MAPEH7', '1:00-2:00', 'Tuesday', '2019-10-11 11:24:06'),
('26-FIL7', '1:00-2:00', 'Wednesday', '2019-10-11 11:24:06'),
('26-FIL7', '1:00-2:00', 'Thursday', '2019-10-11 11:24:06'),
('26-FIL7', '1:00-2:00', 'Friday', '2019-10-11 11:24:06'),
('26-TLE7', '2:00-3:00', 'Monday', '2019-10-11 11:24:06'),
('26-TLE7', '2:00-3:00', 'Tuesday', '2019-10-11 11:24:06'),
('26-TLE7', '2:00-3:00', 'Thursday', '2019-10-11 11:24:06'),
('26-TLE7', '2:00-3:00', 'Friday', '2019-10-11 11:24:06'),
('26-MAPEH7', '3:00-4:00', 'Wednesday', '2019-10-11 11:24:06'),
('26-MAPEH7', '3:00-4:00', 'Thursday', '2019-10-11 11:24:06'),
('27-RESEARCH7', '6:00-7:00', 'Monday', '2019-10-11 11:24:06'),
('27-RESEARCH7', '6:00-7:00', 'Wednesday', '2019-10-11 11:24:06'),
('27-RESEARCH7', '6:00-7:00', 'Friday', '2019-10-11 11:24:06'),
('27-RESEARCH7', '6:00-7:00', 'Thursday', '2019-10-11 11:24:06'),
('27-MATH7A', '7:00-8:00', 'Monday', '2019-10-11 11:24:06'),
('27-MATH7A', '7:00-8:00', 'Tuesday', '2019-10-11 11:24:06'),
('27-MATH7A', '7:00-8:00', 'Thursday', '2019-10-11 11:24:06'),
('27-MATH7A', '7:00-8:00', 'Friday', '2019-10-11 11:24:06'),
('27-AP7', '7:00-8:00', 'Wednesday', '2019-10-11 11:24:06'),
('27-SCI7A', '8:00-9:00', 'Monday', '2019-10-11 11:24:06'),
('27-SCI7A', '8:00-9:00', 'Tuesday', '2019-10-11 11:24:06'),
('27-SCI7A', '8:00-9:00', 'Wednesday', '2019-10-11 11:24:06'),
('27-SCI7A', '8:00-9:00', 'Friday', '2019-10-11 11:24:06'),
('27-AP7', '8:00-9:00', 'Thursday', '2019-10-11 11:24:06'),
('27-TLE7', '9:20-10:20', 'Monday', '2019-10-11 11:24:06'),
('27-TLE7', '9:20-10:20', 'Tuesday', '2019-10-11 11:24:06'),
('27-TLE7', '9:20-10:20', 'Friday', '2019-10-11 11:24:06'),
('27-ESP7', '9:20-10:20', 'Wednesday', '2019-10-11 11:24:06'),
('27-ESP7', '9:20-10:20', 'Thursday', '2019-10-11 11:24:06'),
('27-MATH7B', '10:20-11:20', 'Monday', '2019-10-11 11:24:06'),
('27-MATH7B', '10:20-11:20', 'Tuesday', '2019-10-11 11:24:06'),
('27-MATH7B', '10:20-11:20', 'Thursday', '2019-10-11 11:24:06'),
('27-MATH7B', '10:20-11:20', 'Friday', '2019-10-11 11:24:06'),
('27-TLE7', '10:20-11:20', 'Wednesday', '2019-10-11 11:24:06'),
('27-ENG7', '11:20-12:20', 'Monday', '2019-10-11 11:24:06'),
('27-ENG7', '11:20-12:20', 'Tuesday', '2019-10-11 11:24:06'),
('27-ENG7', '11:20-12:20', 'Thursday', '2019-10-11 11:24:06'),
('27-ENG7', '11:20-12:20', 'Friday', '2019-10-11 11:24:06'),
('27-FIL7', '11:20-12:20', 'Wednesday', '2019-10-11 11:24:06'),
('27-SCI7B', '1:00-2:00', 'Monday', '2019-10-11 11:24:06'),
('27-SCI7B', '1:00-2:00', 'Tuesday', '2019-10-11 11:24:06'),
('27-SCI7B', '1:00-2:00', 'Wednesday', '2019-10-11 11:24:06'),
('27-SCI7B', '1:00-2:00', 'Thursday', '2019-10-11 11:24:06'),
('27-MAPEH7', '1:00-2:00', 'Friday', '2019-10-11 11:24:06'),
('27-MAPEH7', '2:00-3:00', 'Monday', '2019-10-11 11:24:06'),
('27-MAPEH7', '2:00-3:00', 'Tuesday', '2019-10-11 11:24:06'),
('27-MAPEH7', '2:00-3:00', 'Thursday', '2019-10-11 11:24:06'),
('27-FIL7', '3:00-4:00', 'Monday', '2019-10-11 11:24:06'),
('27-FIL7', '3:00-4:00', 'Tuesday', '2019-10-11 11:24:06'),
('27-FIL7', '3:00-4:00', 'Thursday', '2019-10-11 11:24:06'),
('26-MATH7A', '6:00-7:00', 'Thursday', '2019-10-11 11:24:06'),
('26-SCI7A', '6:00-7:00', 'Tuesday', '2019-10-11 11:24:06'),
('28-MATH7A', '6:00-7:00', 'Monday', '2019-10-11 11:24:06'),
('28-MATH7A', '6:00-7:00', 'Tuesday', '2019-10-11 11:24:06'),
('28-MATH7A', '6:00-7:00', 'Wednesday', '2019-10-11 11:24:06'),
('28-MATH7A', '6:00-7:00', 'Friday', '2019-10-11 11:24:06'),
('28-AP7', '6:00-7:00', 'Thursday', '2019-10-11 11:24:06'),
('28-AP7', '7:00-8:00', 'Monday', '2019-10-11 11:24:06'),
('28-RESEARCH7', '7:00-8:00', 'Tuesday', '2019-10-11 11:24:06'),
('28-RESEARCH7', '7:00-8:00', 'Wednesday', '2019-10-11 11:24:06'),
('28-RESEARCH7', '7:00-8:00', 'Thursday', '2019-10-11 11:24:06'),
('28-RESEARCH7', '7:00-8:00', 'Friday', '2019-10-11 11:24:06'),
('28-ENG7', '8:00-9:00', 'Monday', '2019-10-11 11:24:06'),
('28-ENG7', '8:00-9:00', 'Tuesday', '2019-10-11 11:24:06'),
('28-ENG7', '8:00-9:00', 'Thursday', '2019-10-11 11:24:06'),
('28-ENG7', '8:00-9:00', 'Friday', '2019-10-11 11:24:06'),
('28-AP7', '8:00-9:00', 'Wednesday', '2019-10-11 11:24:06'),
('28-ESP7', '9:20-10:20', 'Monday', '2019-10-11 11:24:06'),
('28-ESP7', '9:20-10:20', 'Tuesday', '2019-10-11 11:24:06'),
('28-MAPEH7', '9:20-10:20', 'Wednesday', '2019-10-11 11:24:06'),
('28-MAPEH7', '9:20-10:20', 'Thursday', '2019-10-11 11:24:06'),
('28-MAPEH7', '9:20-10:20', 'Friday', '2019-10-11 11:24:06'),
('28-SCI7A', '10:20-11:20', 'Monday', '2019-10-11 11:24:06'),
('28-SCI7A', '10:20-11:20', 'Wednesday', '2019-10-11 11:24:06'),
('28-SCI7A', '10:20-11:20', 'Thursday', '2019-10-11 11:24:06'),
('28-SCI7A', '10:20-11:20', 'Friday', '2019-10-11 11:24:06'),
('28-SCI7B', '10:20-11:20', 'Tuesday', '2019-10-11 11:24:06'),
('28-MATH7B', '11:20-12:20', 'Monday', '2019-10-11 11:24:06'),
('28-MAPEH7', '11:20-12:20', 'Tuesday', '2019-10-11 11:24:06'),
('28-MATH7B', '11:20-12:20', 'Wednesday', '2019-10-11 11:24:06'),
('28-MATH7B', '11:20-12:20', 'Thursday', '2019-10-11 11:24:06'),
('28-MATH7B', '11:20-12:20', 'Friday', '2019-10-11 11:24:06'),
('28-TLE7', '1:00-2:00', 'Monday', '2019-10-11 11:24:06'),
('28-TLE7', '1:00-2:00', 'Tuesday', '2019-10-11 11:24:06'),
('28-SCI7B', '1:00-2:00', 'Wednesday', '2019-10-11 11:24:06'),
('28-TLE7', '1:00-2:00', 'Thursday', '2019-10-11 11:24:06'),
('28-TLE7', '1:00-2:00', 'Friday', '2019-10-11 11:24:06'),
('28-FIL7', '2:00-3:00', 'Monday', '2019-10-11 11:24:06'),
('28-FIL7', '2:00-3:00', 'Tuesday', '2019-10-11 11:24:06'),
('28-FIL7', '2:00-3:00', 'Wednesday', '2019-10-11 11:24:06'),
('28-SCI7B', '2:00-3:00', 'Thursday', '2019-10-11 11:24:06'),
('28-FIL7', '2:00-3:00', 'Friday', '2019-10-11 11:24:06'),
('28-SCI7B', '3:00-4:00', 'Friday', '2019-10-11 11:24:06'),
('29-MATH8A', '6:00-7:00', 'Monday', '2019-10-11 11:24:06'),
('29-MATH8A', '6:00-7:00', 'Tuesday', '2019-10-11 11:24:06'),
('29-MATH8A', '6:00-7:00', 'Wednesday', '2019-10-11 11:24:06'),
('29-MATH8A', '6:00-7:00', 'Thursday', '2019-10-11 11:24:06'),
('29-AP8', '6:00-7:00', 'Friday', '2019-10-11 11:24:06'),
('29-SCI8B', '7:00-8:00', 'Monday', '2019-10-11 11:24:06'),
('29-SCI8B', '7:00-8:00', 'Tuesday', '2019-10-11 11:24:06'),
('29-SCI8B', '7:00-8:00', 'Wednesday', '2019-10-11 11:24:06'),
('29-SCI8B', '7:00-8:00', 'Friday', '2019-10-11 11:24:06'),
('29-AP8', '7:00-8:00', 'Thursday', '2019-10-11 11:24:06'),
('29-ESP8', '8:00-9:00', 'Monday', '2019-10-11 11:24:06'),
('29-ESP8', '8:00-9:00', 'Wednesday', '2019-10-11 11:24:06'),
('29-AP8', '8:00-9:00', 'Tuesday', '2019-10-11 11:24:06'),
('29-TLE8', '8:00-9:00', 'Friday', '2019-10-11 11:24:06'),
('29-MATH8B', '9:20-10:20', 'Monday', '2019-10-11 11:24:06'),
('29-MATH8B', '9:20-10:20', 'Tuesday', '2019-10-11 11:24:06'),
('29-MATH8B', '9:20-10:20', 'Wednesday', '2019-10-11 11:24:06'),
('29-MATH8B', '9:20-10:20', 'Friday', '2019-10-11 11:24:06'),
('29-TLE8', '9:20-10:20', 'Thursday', '2019-10-11 11:24:06'),
('29-MAPEH8', '10:20-11:20', 'Monday', '2019-10-11 11:24:06'),
('29-MAPEH8', '10:20-11:20', 'Tuesday', '2019-10-11 11:24:06'),
('29-MAPEH8', '10:20-11:20', 'Friday', '2019-10-11 11:24:06'),
('29-TLE8', '10:20-11:20', 'Wednesday', '2019-10-11 11:24:06'),
('29-ENG8', '10:20-11:20', 'Thursday', '2019-10-11 11:24:06'),
('29-SCI8A', '11:20-12:20', 'Monday', '2019-10-11 11:24:06'),
('29-SCI8A', '11:20-12:20', 'Tuesday', '2019-10-11 11:24:06'),
('29-SCI8A', '11:20-12:20', 'Thursday', '2019-10-11 11:24:06'),
('29-SCI8A', '11:20-12:20', 'Friday', '2019-10-11 11:24:06'),
('29-TLE8', '11:20-12:20', 'Wednesday', '2019-10-11 11:24:06'),
('29-MAPEH8', '1:00-2:00', 'Wednesday', '2019-10-11 11:24:06'),
('29-RESEARCH8', '1:00-2:00', 'Tuesday', '2019-10-11 11:24:06'),
('29-RESEARCH8', '1:00-2:00', 'Monday', '2019-10-11 11:24:06'),
('29-RESEARCH8', '1:00-2:00', 'Thursday', '2019-10-11 11:24:06'),
('29-RESEARCH8', '1:00-2:00', 'Friday', '2019-10-11 11:24:06'),
('29-ENG8', '2:00-3:00', 'Monday', '2019-10-11 11:24:06'),
('29-ENG8', '2:00-3:00', 'Tuesday', '2019-10-11 11:24:06'),
('29-ENG8', '2:00-3:00', 'Thursday', '2019-10-11 11:24:06'),
('29-FIL8', '2:00-3:00', 'Friday', '2019-10-11 11:24:06'),
('29-FIL8', '3:00-4:00', 'Monday', '2019-10-11 11:24:06'),
('29-FIL8', '3:00-4:00', 'Tuesday', '2019-10-11 11:24:06'),
('29-FIL8', '3:00-4:00', 'Thursday', '2019-10-11 11:24:06'),
('30-ESP8', '6:00-7:00', 'Wednesday', '2019-10-11 11:24:06'),
('30-TLE8', '6:00-7:00', 'Monday', '2019-10-11 11:24:06'),
('30-TLE8', '6:00-7:00', 'Tuesday', '2019-10-11 11:24:06'),
('30-TLE8', '6:00-7:00', 'Thursday', '2019-10-11 11:24:06'),
('30-TLE8', '6:00-7:00', 'Friday', '2019-10-11 11:24:06'),
('30-ESP8', '7:00-8:00', 'Monday', '2019-10-11 11:24:06'),
('30-MATH8A', '7:00-8:00', 'Tuesday', '2019-10-11 11:24:06'),
('30-MATH8A', '7:00-8:00', 'Wednesday', '2019-10-11 11:24:06'),
('30-MATH8A', '7:00-8:00', 'Thursday', '2019-10-11 11:24:06'),
('30-MATH8A', '7:00-8:00', 'Friday', '2019-10-11 11:24:06'),
('30-AP8', '8:00-9:00', 'Monday', '2019-10-11 11:24:06'),
('30-AP8', '8:00-9:00', 'Wednesday', '2019-10-11 11:24:06'),
('30-AP8', '8:00-9:00', 'Thursday', '2019-10-11 11:24:06'),
('29-ESP8', '8:00-9:00', 'Thursday', '2019-10-11 11:24:06'),
('30-ESP8', '8:00-9:00', 'Tuesday', '2019-10-11 11:24:06'),
('30-RESEARCH8', '8:00-9:00', 'Friday', '2019-10-11 11:24:06'),
('30-SCI8B', '9:20-10:20', 'Monday', '2019-10-11 11:24:06'),
('30-SCI8B', '9:20-10:20', 'Tuesday', '2019-10-11 11:24:06'),
('30-SCI8B', '9:20-10:20', 'Wednesday', '2019-10-11 11:24:06'),
('30-SCI8B', '9:20-10:20', 'Thursday', '2019-10-11 11:24:06'),
('30-RESEARCH8', '9:20-10:20', 'Friday', '2019-10-11 11:24:06'),
('30-MATH8B', '10:20-11:20', 'Monday', '2019-10-11 11:24:06'),
('30-MATH8B', '10:20-11:20', 'Tuesday', '2019-10-11 11:24:06'),
('30-RESEARCH8', '10:20-11:20', 'Wednesday', '2019-10-11 11:24:06'),
('30-MATH8B', '10:20-11:20', 'Thursday', '2019-10-11 11:24:06'),
('30-MATH8B', '10:20-11:20', 'Friday', '2019-10-11 11:24:06'),
('30-ENG8', '11:20-12:20', 'Monday', '2019-10-11 11:24:06'),
('30-ENG8', '11:20-12:20', 'Wednesday', '2019-10-11 11:24:06'),
('30-ENG8', '11:20-12:20', 'Thursday', '2019-10-11 11:24:06'),
('30-MAPEH8', '11:20-12:20', 'Tuesday', '2019-10-11 11:24:06'),
('30-MAPEH8', '11:20-12:20', 'Friday', '2019-10-11 11:24:06'),
('30-FIL8', '1:00-2:00', 'Monday', '2019-10-11 11:24:06'),
('30-FIL8', '1:00-2:00', 'Tuesday', '2019-10-11 11:24:06'),
('30-FIL8', '1:00-2:00', 'Wednesday', '2019-10-11 11:24:06'),
('30-FIL8', '1:00-2:00', 'Friday', '2019-10-11 11:24:06'),
('30-SCI8A', '2:00-3:00', 'Monday', '2019-10-11 11:24:06'),
('30-SCI8A', '2:00-3:00', 'Tuesday', '2019-10-11 11:24:06'),
('30-SCI8A', '2:00-3:00', 'Wednesday', '2019-10-11 11:24:06'),
('30-MAPEH8', '2:00-3:00', 'Thursday', '2019-10-11 11:24:06'),
('30-MAPEH8', '3:00-4:00', 'Wednesday', '2019-10-11 11:24:06'),
('30-SCI8A', '3:00-4:00', 'Thursday', '2019-10-11 11:24:06'),
('30-RESEARCH8', '1:00-2:00', 'Thursday', '2019-10-11 11:24:06'),
('30-ENG8', '3:00-4:00', 'Tuesday', '2019-10-11 11:24:06'),
('31-SCI9A', '6:00-7:00', 'Monday', '2019-10-11 11:24:06'),
('31-SCI9A', '6:00-7:00', 'Tuesday', '2019-10-11 11:24:06'),
('31-SCI9A', '6:00-7:00', 'Wednesday', '2019-10-11 11:24:06'),
('31-AP9', '6:00-7:00', 'Thursday', '2019-10-11 11:24:06'),
('31-SCI9A', '6:00-7:00', 'Friday', '2019-10-11 11:24:06'),
('31-TLE9', '7:00-8:00', 'Monday', '2019-10-11 11:24:06'),
('31-TLE9', '7:00-8:00', 'Tuesday', '2019-10-11 11:24:06'),
('31-AP9', '7:00-8:00', 'Wednesday', '2019-10-11 11:24:06'),
('31-TLE9', '7:00-8:00', 'Thursday', '2019-10-11 11:24:06'),
('31-TLE9', '7:00-8:00', 'Friday', '2019-10-11 11:24:06'),
('31-SCI9B', '8:00-9:00', 'Monday', '2019-10-11 11:24:06'),
('31-SCI9B', '8:00-9:00', 'Tuesday', '2019-10-11 11:24:06'),
('31-SCI9B', '8:00-9:00', 'Wednesday', '2019-10-11 11:24:06'),
('31-SCI9B', '8:00-9:00', 'Thursday', '2019-10-11 11:24:06'),
('31-AP9', '8:00-9:00', 'Friday', '2019-10-11 11:24:06'),
('31-MATH9B', '9:20-10:20', 'Monday', '2019-10-11 11:24:06'),
('31-MATH9B', '9:20-10:20', 'Tuesday', '2019-10-11 11:24:06'),
('31-MATH9B', '9:20-10:20', 'Wednesday', '2019-10-11 11:24:06'),
('31-MATH9B', '9:20-10:20', 'Thursday', '2019-10-11 11:24:06'),
('31-ESP9', '9:20-10:20', 'Friday', '2019-10-11 11:24:06'),
('31-FOLA9', '10:20-11:20', 'Monday', '2019-10-11 11:24:06'),
('31-FOLA9', '10:20-11:20', 'Tuesday', '2019-10-11 11:24:06'),
('31-FOLA9', '10:20-11:20', 'Wednesday', '2019-10-11 11:24:06'),
('31-ESP9', '10:20-11:20', 'Thursday', '2019-10-11 11:24:06'),
('31-FOLA9', '10:20-11:20', 'Friday', '2019-10-11 11:24:06'),
('31-MATH9A', '11:20-12:20', 'Monday', '2019-10-11 11:24:06'),
('31-MATH9A', '11:20-12:20', 'Tuesday', '2019-10-11 11:24:06'),
('31-MATH9A', '11:20-12:20', 'Wednesday', '2019-10-11 11:24:06'),
('31-MATH9A', '11:20-12:20', 'Thursday', '2019-10-11 11:24:06'),
('31-ESP9', '11:20-12:20', 'Friday', '2019-10-11 11:24:06'),
('31-ENG9', '1:00-2:00', 'Monday', '2019-10-11 11:24:06'),
('31-ENG9', '1:00-2:00', 'Tuesday', '2019-10-11 11:24:06'),
('31-ENG9', '1:00-2:00', 'Wednesday', '2019-10-11 11:24:06'),
('31-ENG9', '1:00-2:00', 'Friday', '2019-10-11 11:24:06'),
('31-MAPEH9', '1:00-2:00', 'Thursday', '2019-10-11 11:24:06'),
('31-FIL9', '2:00-3:00', 'Tuesday', '2019-10-11 11:24:06'),
('31-FIL9', '2:00-3:00', 'Wednesday', '2019-10-11 11:24:06'),
('31-FIL9', '2:00-3:00', 'Thursday', '2019-10-11 11:24:06'),
('31-MAPEH9', '2:00-3:00', 'Monday', '2019-10-11 11:24:06'),
('31-MAPEH9', '2:00-3:00', 'Friday', '2019-10-11 11:24:06'),
('31-MAPEH9', '3:00-4:00', 'Tuesday', '2019-10-11 11:24:06'),
('31-FIL9', '3:00-4:00', 'Friday', '2019-10-11 11:24:06'),
('32-AP9', '6:00-7:00', 'Monday', '2019-10-11 11:24:06'),
('32-AP9', '6:00-7:00', 'Tuesday', '2019-10-11 11:24:06'),
('32-AP9', '6:00-7:00', 'Wednesday', '2019-10-11 11:24:06'),
('32-ESP9', '6:00-7:00', 'Thursday', '2019-10-11 11:24:06'),
('32-ESP9', '6:00-7:00', 'Friday', '2019-10-11 11:24:06'),
('32-SCI9A', '7:00-8:00', 'Monday', '2019-10-11 11:24:06'),
('32-SCI9A', '7:00-8:00', 'Tuesday', '2019-10-11 11:24:06'),
('32-SCI9A', '7:00-8:00', 'Wednesday', '2019-10-11 11:24:06'),
('32-ESP9', '7:00-8:00', 'Thursday', '2019-10-11 11:24:06'),
('32-SCI9A', '7:00-8:00', 'Friday', '2019-10-11 11:24:06'),
('32-TLE9', '8:00-9:00', 'Monday', '2019-10-11 11:24:06'),
('32-TLE9', '8:00-9:00', 'Tuesday', '2019-10-11 11:24:06'),
('32-TLE9', '8:00-9:00', 'Wednesday', '2019-10-11 11:24:06'),
('32-TLE9', '8:00-9:00', 'Thursday', '2019-10-11 11:24:06'),
('32-MATH9B', '8:00-9:00', 'Friday', '2019-10-11 11:24:06'),
('32-SCI9B', '9:20-10:20', 'Monday', '2019-10-11 11:24:06'),
('32-SCI9B', '9:20-10:20', 'Tuesday', '2019-10-11 11:24:06'),
('32-SCI9B', '9:20-10:20', 'Wednesday', '2019-10-11 11:24:06'),
('32-SCI9B', '9:20-10:20', 'Thursday', '2019-10-11 11:24:06'),
('32-MATH9B', '10:20-11:20', 'Monday', '2019-10-11 11:24:06'),
('32-MATH9B', '10:20-11:20', 'Wednesday', '2019-10-11 11:24:06'),
('32-MATH9B', '10:20-11:20', 'Thursday', '2019-10-11 11:24:06'),
('32-FIL9', '10:20-11:20', 'Tuesday', '2019-10-11 11:24:06'),
('32-FIL9', '10:20-11:20', 'Friday', '2019-10-11 11:24:06'),
('32-FOLA9', '11:20-12:20', 'Monday', '2019-10-11 11:24:06'),
('32-FOLA9', '11:20-12:20', 'Tuesday', '2019-10-11 11:24:06'),
('32-FIL9', '11:20-12:20', 'Wednesday', '2019-10-11 11:24:06'),
('32-FOLA9', '11:20-12:20', 'Thursday', '2019-10-11 11:24:06'),
('32-FOLA9', '11:20-12:20', 'Friday', '2019-10-11 11:24:06'),
('32-MAPEH9', '1:00-2:00', 'Monday', '2019-10-11 11:24:06'),
('32-MAPEH9', '1:00-2:00', 'Tuesday', '2019-10-11 11:24:06'),
('32-MAPEH9', '1:00-2:00', 'Friday', '2019-10-11 11:24:06'),
('32-MATH9A', '1:00-2:00', 'Wednesday', '2019-10-11 11:24:06'),
('32-ENG9', '1:00-2:00', 'Thursday', '2019-10-11 11:24:06'),
('32-MATH9A', '2:00-3:00', 'Tuesday', '2019-10-11 11:24:06'),
('32-MATH9A', '2:00-3:00', 'Thursday', '2019-10-11 11:24:06'),
('32-MATH9A', '2:00-3:00', 'Friday', '2019-10-11 11:24:06'),
('32-FIL9', '2:00-3:00', 'Monday', '2019-10-11 11:24:06'),
('32-MAPEH9', '2:00-3:00', 'Wednesday', '2019-10-11 11:24:06'),
('32-ENG9', '3:00-4:00', 'Monday', '2019-10-11 11:24:06'),
('32-ENG9', '3:00-4:00', 'Wednesday', '2019-10-11 11:24:06'),
('32-ENG9', '3:00-4:00', 'Friday', '2019-10-11 11:24:06'),
('33-ENG10', '6:00-7:00', 'Monday', '2019-10-11 11:24:06'),
('33-ENG10', '6:00-7:00', 'Tuesday', '2019-10-11 11:24:06'),
('33-AP10', '6:00-7:00', 'Wednesday', '2019-10-11 11:24:06'),
('33-ENG10', '6:00-7:00', 'Thursday', '2019-10-11 11:24:06'),
('33-ENG10', '6:00-7:00', 'Friday', '2019-10-11 11:24:06'),
('33-FOLA10', '7:00-8:00', 'Monday', '2019-10-11 11:24:06'),
('33-AP10', '7:00-8:00', 'Tuesday', '2019-10-11 11:24:06'),
('33-FOLA10', '7:00-8:00', 'Wednesday', '2019-10-11 11:24:06'),
('33-FOLA10', '7:00-8:00', 'Thursday', '2019-10-11 11:24:06'),
('33-FOLA10', '7:00-8:00', 'Friday', '2019-10-11 11:24:06'),
('33-MATH10A', '8:00-9:00', 'Monday', '2019-10-11 11:24:06'),
('33-MATH10A', '8:00-9:00', 'Tuesday', '2019-10-11 11:24:06'),
('33-MATH10A', '8:00-9:00', 'Wednesday', '2019-10-11 11:24:06'),
('33-ESP10', '8:00-9:00', 'Thursday', '2019-10-11 11:24:06'),
('33-MATH10A', '8:00-9:00', 'Friday', '2019-10-11 11:24:06'),
('33-AP10', '9:20-10:20', 'Monday', '2019-10-11 11:24:06'),
('33-SCI10A', '9:20-10:20', 'Tuesday', '2019-10-11 11:24:06'),
('33-SCI10A', '9:20-10:20', 'Wednesday', '2019-10-11 11:24:06'),
('33-SCI10A', '9:20-10:20', 'Thursday', '2019-10-11 11:24:06'),
('33-SCI10A', '9:20-10:20', 'Friday', '2019-10-11 11:24:06'),
('33-TLE10', '10:20-11:20', 'Monday', '2019-10-11 11:24:06'),
('33-TLE10', '10:20-11:20', 'Tuesday', '2019-10-11 11:24:06'),
('33-ESP10', '10:20-11:20', 'Wednesday', '2019-10-11 11:24:06'),
('33-TLE10', '10:20-11:20', 'Thursday', '2019-10-11 11:24:06'),
('33-TLE10', '10:20-11:20', 'Friday', '2019-10-11 11:24:06'),
('33-FIL10', '11:20-12:20', 'Monday', '2019-10-11 11:24:06'),
('33-FIL10', '11:20-12:20', 'Thursday', '2019-10-11 11:24:06'),
('33-FIL10', '11:20-12:20', 'Friday', '2019-10-11 11:24:06'),
('33-ESP10', '11:20-12:20', 'Tuesday', '2019-10-11 11:24:06'),
('33-MATH10B', '11:20-12:20', 'Wednesday', '2019-10-11 11:24:06'),
('33-MATH10B', '1:00-2:00', 'Monday', '2019-10-11 11:24:06'),
('33-MATH10B', '1:00-2:00', 'Thursday', '2019-10-11 11:24:06'),
('33-MATH10B', '1:00-2:00', 'Friday', '2019-10-11 11:24:06'),
('33-HOMEROOM10', '1:00-2:00', 'Wednesday', '2019-10-11 11:24:06'),
('33-FIL10', '1:00-2:00', 'Tuesday', '2019-10-11 11:24:06'),
('33-SCI10B', '2:00-3:00', 'Monday', '2019-10-11 11:24:06'),
('33-SCI10B', '2:00-3:00', 'Tuesday', '2019-10-11 11:24:06'),
('33-SCI10B', '2:00-3:00', 'Thursday', '2019-10-11 11:24:06'),
('33-MAPEH10', '2:00-3:00', 'Wednesday', '2019-10-11 11:24:06'),
('33-SCI10B', '2:00-3:00', 'Friday', '2019-10-11 11:24:06'),
('33-MAPEH10', '3:00-4:00', 'Monday', '2019-10-11 11:24:06'),
('33-MAPEH10', '3:00-4:00', 'Tuesday', '2019-10-11 11:24:06'),
('27-AP7', '6:00-7:00', 'Tuesday', '2019-10-11 11:24:06'),
('34-SCI10A', '10:20-11:20', 'Tuesday', '2019-10-11 13:16:53');

--
-- Triggers `sched`
--
DELIMITER $$
CREATE TRIGGER `Schedule constraints` BEFORE INSERT ON `sched` FOR EACH ROW IF
	(SELECT COUNT(SubjectID) FROM sched WHERE SubjectID = new.SubjectID) >= (SELECT Frequency FROM subjectcode LEFT JOIN subject ON subject.SubjectCode = subjectcode.SubjectCode WHERE SubjectID = new.SubjectID) 
    
THEN
	SIGNAL SQLSTATE '02000' SET MESSAGE_TEXT = 'Warning: Exceeds occurence!';
END IF
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `backup sched` BEFORE DELETE ON `sched` FOR EACH ROW INSERT INTO sched_backup 
SELECT * FROM sched
WHERE SubjectID = old.SubjectID 
AND SubjectDay = old.SubjectDay
AND SubjectTime = old.SubjectTime
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `sched_backup`
--

CREATE TABLE `sched_backup` (
  `SubjectID` varchar(255) NOT NULL,
  `SubjectTime` varchar(13) NOT NULL,
  `SubjectDay` varchar(10) NOT NULL,
  `DateCreated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `section`
--

CREATE TABLE `section` (
  `SectionName` varchar(255) NOT NULL,
  `GradeLevel` int(2) NOT NULL,
  `RoomNum` int(10) DEFAULT NULL,
  `SectionNum` int(11) NOT NULL,
  `Population` int(3) NOT NULL,
  `DateCreated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `section`
--

INSERT INTO `section` (`SectionName`, `GradeLevel`, `RoomNum`, `SectionNum`, `Population`, `DateCreated`) VALUES
('Newton', 7, 203, 26, 1, '2019-10-11 11:17:56'),
('Euclid', 7, 204, 27, 0, '2019-10-11 11:17:56'),
('Tesla', 7, 205, 28, 0, '2019-10-11 11:17:56'),
('Air', 8, 201, 29, 0, '2019-10-11 11:17:56'),
('Water', 8, 202, 30, 0, '2019-10-11 11:17:56'),
('Sun', 9, 303, 31, 0, '2019-10-11 11:17:56'),
('Moon', 9, 304, 32, 0, '2019-10-11 11:17:56'),
('Earth', 10, 305, 33, 0, '2019-10-11 11:17:56'),
('Mars', 10, 200, 34, 0, '2019-10-11 11:17:56');

--
-- Triggers `section`
--
DELIMITER $$
CREATE TRIGGER `backup section` BEFORE DELETE ON `section` FOR EACH ROW INSERT INTO section_backup 
SELECT * FROM section
WHERE SectionNum = old.SectionNum
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `backup section UPDATE trigger` BEFORE UPDATE ON `section` FOR EACH ROW INSERT INTO section_backup 
SELECT * FROM section
WHERE SectionNum = old.SectionNum
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `section_backup`
--

CREATE TABLE `section_backup` (
  `SectionName` varchar(255) NOT NULL,
  `GradeLevel` int(2) NOT NULL,
  `RoomNum` int(10) DEFAULT NULL,
  `SectionNum` int(11) NOT NULL,
  `Population` int(3) NOT NULL,
  `DateCreated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `section_backup`
--

INSERT INTO `section_backup` (`SectionName`, `GradeLevel`, `RoomNum`, `SectionNum`, `Population`, `DateCreated`) VALUES
('Newton', 7, 203, 0, 1, '2019-10-11 11:17:56'),
('Euclid', 7, 204, 0, 0, '2019-10-11 11:17:56'),
('Tesla', 7, 205, 0, 0, '2019-10-11 11:17:56'),
('Air', 8, 201, 0, 0, '2019-10-11 11:17:56'),
('Water', 8, 202, 0, 0, '2019-10-11 11:17:56'),
('Sun', 9, 303, 0, 0, '2019-10-11 11:17:56'),
('Moon', 9, 304, 0, 0, '2019-10-11 11:17:56'),
('Earth', 10, 305, 0, 0, '2019-10-11 11:17:56'),
('Mars', 10, 200, 0, 0, '2019-10-11 11:17:56');

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `LRNNum` bigint(12) NOT NULL,
  `LastName` varchar(255) NOT NULL,
  `FirstName` varchar(255) NOT NULL,
  `MiddleName` varchar(255) DEFAULT NULL,
  `Birthday` date NOT NULL,
  `Age` int(3) NOT NULL,
  `StreetAdd1` varchar(255) NOT NULL,
  `StreetAdd2` varchar(255) DEFAULT NULL,
  `City` varchar(255) NOT NULL,
  `Province` varchar(255) NOT NULL,
  `Country` varchar(255) NOT NULL,
  `Gender` varchar(6) NOT NULL,
  `GradeLevel` int(2) NOT NULL,
  `Type` varchar(10) NOT NULL,
  `URL_Picture` varchar(255) NOT NULL,
  `DateCreated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`LRNNum`, `LastName`, `FirstName`, `MiddleName`, `Birthday`, `Age`, `StreetAdd1`, `StreetAdd2`, `City`, `Province`, `Country`, `Gender`, `GradeLevel`, `Type`, `URL_Picture`, `DateCreated`) VALUES
(123456789121, 'Gabon', 'Jose', 'Manuel', '1997-03-28', 22, '#23 E. Caruncho Ave', NULL, 'Pasig', 'Metro Manila', 'Philippines', 'Male', 7, 'Old', '46280_541687292517090_621937474_n.jpg', '2019-10-11 11:19:02'),
(123456789123, 'Gabon', 'Jose Mari', 'Manuel', '1997-03-28', 22, '#242 Marigold St', 'Pinagbuhatan', 'Pasig', 'Metro Manila', 'Philippines', 'Male', 7, 'Old', '46280_541687292517090_621937474_n.jpg', '2019-10-11 11:19:02'),
(567890321425, 'Gabon', 'Carlos Miguel', 'Manuel', '2010-01-22', 9, '#4803 V. Baltazar', NULL, 'Pasig', 'Metro Manila', 'Philippines', 'Male', 7, 'Old', '46280_541687292517090_621937474_n.jpg', '2019-10-11 11:19:02');

--
-- Triggers `student`
--
DELIMITER $$
CREATE TRIGGER `backup student` BEFORE DELETE ON `student` FOR EACH ROW INSERT INTO student_backup 
SELECT * FROM student
WHERE LRNNum = old.LRNNum
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `backup student UPDATE trigger` BEFORE UPDATE ON `student` FOR EACH ROW INSERT INTO student_backup 
SELECT * FROM student
WHERE LRNNum = old.LRNNum
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `student_backup`
--

CREATE TABLE `student_backup` (
  `LRNNum` bigint(12) NOT NULL,
  `LastName` varchar(255) NOT NULL,
  `FirstName` varchar(255) NOT NULL,
  `MiddleName` varchar(255) DEFAULT NULL,
  `Birthday` date NOT NULL,
  `Age` int(3) NOT NULL,
  `StreetAdd1` varchar(255) NOT NULL,
  `StreetAdd2` varchar(255) DEFAULT NULL,
  `City` varchar(255) NOT NULL,
  `Province` varchar(255) NOT NULL,
  `Country` varchar(255) NOT NULL,
  `Gender` varchar(6) NOT NULL,
  `GradeLevel` int(2) NOT NULL,
  `Type` varchar(10) NOT NULL,
  `URL_Picture` varchar(255) NOT NULL,
  `DateCreated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `student_section`
--

CREATE TABLE `student_section` (
  `LRNNum` bigint(12) NOT NULL,
  `SectionNum` int(11) NOT NULL,
  `GradeLevel` int(2) NOT NULL,
  `DateCreated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Triggers `student_section`
--
DELIMITER $$
CREATE TRIGGER `Add Population` AFTER INSERT ON `student_section` FOR EACH ROW UPDATE section 
SET Population = Population + 1
WHERE SectionNum = new.SectionNum
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `Sub Population` BEFORE DELETE ON `student_section` FOR EACH ROW BEGIN

UPDATE section
SET Population = Population - 1
WHERE SectionNum = old.SectionNum;

INSERT INTO student_section_backup 
SELECT * FROM student_section
WHERE LRNNum = old.LRNNum
AND SectionNum = old.SectionNum
AND GradeLevel = old.GradeLevel;


END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `backup student_section UPDATE trigger` BEFORE UPDATE ON `student_section` FOR EACH ROW INSERT INTO student_section_backup 
SELECT * FROM student_section
WHERE LRNNum = old.LRNNum
AND SectionNum = old.SectionNum
AND GradeLevel = old.GradeLevel
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `student_section_backup`
--

CREATE TABLE `student_section_backup` (
  `LRNNum` bigint(12) NOT NULL,
  `SectionNum` int(11) NOT NULL,
  `GradeLevel` int(2) NOT NULL,
  `DateCreated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `subject`
--

CREATE TABLE `subject` (
  `SubjectID` varchar(255) NOT NULL,
  `SubjectCode` varchar(255) NOT NULL,
  `SectionNum` int(11) NOT NULL,
  `EmployeeNum` int(11) DEFAULT NULL,
  `DateCreated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `subject`
--

INSERT INTO `subject` (`SubjectID`, `SubjectCode`, `SectionNum`, `EmployeeNum`, `DateCreated`) VALUES
('26-AP7', 'AP 7', 26, NULL, '2019-10-11 11:19:47'),
('26-ENG7', 'ENG 7 ', 26, NULL, '2019-10-11 11:19:47'),
('26-ESP7', 'ESP 7', 26, NULL, '2019-10-11 11:19:47'),
('26-FIL7', 'FIL 7', 26, NULL, '2019-10-11 11:19:47'),
('26-MAPEH7', 'MAPEH 7', 26, NULL, '2019-10-11 11:19:47'),
('26-MATH7A', 'MATH 7A', 26, NULL, '2019-10-11 11:19:47'),
('26-MATH7B', 'MATH 7B', 26, NULL, '2019-10-11 11:19:47'),
('26-RESEARCH7', 'RESEARCH 7', 26, NULL, '2019-10-11 11:19:47'),
('26-SCI7A', 'SCI 7A', 26, NULL, '2019-10-11 11:19:47'),
('26-SCI7B', 'SCI 7B', 26, NULL, '2019-10-11 11:19:47'),
('26-TLE7', 'TLE 7', 26, NULL, '2019-10-11 11:19:47'),
('27-AP7', 'AP 7', 27, NULL, '2019-10-11 11:19:47'),
('27-ENG7', 'ENG 7 ', 27, NULL, '2019-10-11 11:19:47'),
('27-ESP7', 'ESP 7', 27, NULL, '2019-10-11 11:19:47'),
('27-FIL7', 'FIL 7', 27, NULL, '2019-10-11 11:19:47'),
('27-MAPEH7', 'MAPEH 7', 27, NULL, '2019-10-11 11:19:47'),
('27-MATH7A', 'MATH 7A', 27, NULL, '2019-10-11 11:19:47'),
('27-MATH7B', 'MATH 7B', 27, NULL, '2019-10-11 11:19:47'),
('27-RESEARCH7', 'RESEARCH 7', 27, NULL, '2019-10-11 11:19:47'),
('27-SCI7A', 'SCI 7A', 27, NULL, '2019-10-11 11:19:47'),
('27-SCI7B', 'SCI 7B', 27, NULL, '2019-10-11 11:19:47'),
('27-TLE7', 'TLE 7', 27, NULL, '2019-10-11 11:19:47'),
('28-AP7', 'AP 7', 28, NULL, '2019-10-11 11:19:47'),
('28-ENG7', 'ENG 7 ', 28, NULL, '2019-10-11 11:19:47'),
('28-ESP7', 'ESP 7', 28, NULL, '2019-10-11 11:19:47'),
('28-FIL7', 'FIL 7', 28, NULL, '2019-10-11 11:19:47'),
('28-MAPEH7', 'MAPEH 7', 28, NULL, '2019-10-11 11:19:47'),
('28-MATH7A', 'MATH 7A', 28, NULL, '2019-10-11 11:19:47'),
('28-MATH7B', 'MATH 7B', 28, NULL, '2019-10-11 11:19:47'),
('28-RESEARCH7', 'RESEARCH 7', 28, NULL, '2019-10-11 11:19:47'),
('28-SCI7A', 'SCI 7A', 28, NULL, '2019-10-11 11:19:47'),
('28-SCI7B', 'SCI 7B', 28, NULL, '2019-10-11 11:19:47'),
('28-TLE7', 'TLE 7', 28, NULL, '2019-10-11 11:19:47'),
('29-AP8', 'AP 8', 29, NULL, '2019-10-11 11:19:47'),
('29-ENG8', 'ENG 8', 29, NULL, '2019-10-11 11:19:47'),
('29-ESP8', 'ESP 8', 29, NULL, '2019-10-11 11:19:47'),
('29-FIL8', 'FIL 8', 29, NULL, '2019-10-11 11:19:47'),
('29-MAPEH8', 'MAPEH 8', 29, NULL, '2019-10-11 11:19:47'),
('29-MATH8A', 'MATH 8A', 29, NULL, '2019-10-11 11:19:47'),
('29-MATH8B', 'MATH 8B', 29, NULL, '2019-10-11 11:19:47'),
('29-RESEARCH8', 'RESEARCH 8', 29, NULL, '2019-10-11 11:19:47'),
('29-SCI8A', 'SCI 8A', 29, NULL, '2019-10-11 11:19:47'),
('29-SCI8B', 'SCI 8B', 29, NULL, '2019-10-11 11:19:47'),
('29-TLE8', 'TLE 8', 29, NULL, '2019-10-11 11:19:47'),
('30-AP8', 'AP 8', 30, NULL, '2019-10-11 11:19:47'),
('30-ENG8', 'ENG 8', 30, NULL, '2019-10-11 11:19:47'),
('30-ESP8', 'ESP 8', 30, NULL, '2019-10-11 11:19:47'),
('30-FIL8', 'FIL 8', 30, NULL, '2019-10-11 11:19:47'),
('30-MAPEH8', 'MAPEH 8', 30, NULL, '2019-10-11 11:19:47'),
('30-MATH8A', 'MATH 8A', 30, NULL, '2019-10-11 11:19:47'),
('30-MATH8B', 'MATH 8B', 30, NULL, '2019-10-11 11:19:47'),
('30-RESEARCH8', 'RESEARCH 8', 30, NULL, '2019-10-11 11:19:47'),
('30-SCI8A', 'SCI 8A', 30, NULL, '2019-10-11 11:19:47'),
('30-SCI8B', 'SCI 8B', 30, NULL, '2019-10-11 11:19:47'),
('30-TLE8', 'TLE 8', 30, NULL, '2019-10-11 11:19:47'),
('31-AP9', 'AP 9', 31, NULL, '2019-10-11 11:19:47'),
('31-ENG9', 'ENG 9', 31, NULL, '2019-10-11 11:19:47'),
('31-ESP9', 'ESP 9', 31, NULL, '2019-10-11 11:19:47'),
('31-FIL9', 'FIL 9', 31, NULL, '2019-10-11 11:19:47'),
('31-FOLA9', 'FOLA 9', 31, NULL, '2019-10-11 11:19:47'),
('31-MAPEH9', 'MAPEH 9', 31, NULL, '2019-10-11 11:19:47'),
('31-MATH9A', 'MATH 9A', 31, NULL, '2019-10-11 11:19:47'),
('31-MATH9B', 'MATH 9B', 31, NULL, '2019-10-11 11:19:47'),
('31-SCI9A', 'SCI 9A', 31, NULL, '2019-10-11 11:19:47'),
('31-SCI9B', 'SCI 9B', 31, NULL, '2019-10-11 11:19:47'),
('31-TLE9', 'TLE 9', 31, NULL, '2019-10-11 11:19:47'),
('32-AP9', 'AP 9', 32, NULL, '2019-10-11 11:19:47'),
('32-ENG9', 'ENG 9', 32, NULL, '2019-10-11 11:19:47'),
('32-ESP9', 'ESP 9', 32, NULL, '2019-10-11 11:19:47'),
('32-FIL9', 'FIL 9', 32, NULL, '2019-10-11 11:19:47'),
('32-FOLA9', 'FOLA 9', 32, NULL, '2019-10-11 11:19:47'),
('32-MAPEH9', 'MAPEH 9', 32, NULL, '2019-10-11 11:19:47'),
('32-MATH9A', 'MATH 9A', 32, NULL, '2019-10-11 11:19:47'),
('32-MATH9B', 'MATH 9B', 32, NULL, '2019-10-11 11:19:47'),
('32-SCI9A', 'SCI 9A', 32, NULL, '2019-10-11 11:19:47'),
('32-SCI9B', 'SCI 9B', 32, NULL, '2019-10-11 11:19:47'),
('32-TLE9', 'TLE 9', 32, NULL, '2019-10-11 11:19:47'),
('33-AP10', 'AP 10', 33, NULL, '2019-10-11 11:19:47'),
('33-ENG10', 'ENG 10', 33, NULL, '2019-10-11 11:19:47'),
('33-ESP10', 'ESP 10', 33, NULL, '2019-10-11 11:19:47'),
('33-FIL10', 'FIL 10', 33, NULL, '2019-10-11 11:19:47'),
('33-FOLA10', 'FOLA 10', 33, NULL, '2019-10-11 11:19:47'),
('33-HOMEROOM10', 'HOMEROOM 10', 33, NULL, '2019-10-11 11:19:47'),
('33-MAPEH10', 'MAPEH 10', 33, NULL, '2019-10-11 11:19:47'),
('33-MATH10A', 'MATH 10A', 33, NULL, '2019-10-11 11:19:47'),
('33-MATH10B', 'MATH 10B', 33, NULL, '2019-10-11 11:19:47'),
('33-SCI10A', 'SCI 10A', 33, NULL, '2019-10-11 11:19:47'),
('33-SCI10B', 'SCI 10B', 33, NULL, '2019-10-11 11:19:47'),
('33-TLE10', 'TLE 10', 33, NULL, '2019-10-11 11:19:47'),
('34-SCI10A', 'SCI 10A', 34, NULL, '2019-10-11 13:16:53');

--
-- Triggers `subject`
--
DELIMITER $$
CREATE TRIGGER `backup subject` BEFORE DELETE ON `subject` FOR EACH ROW INSERT INTO subject_backup 
SELECT * FROM subject
WHERE SubjectID = old.SubjectID
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `backup subject UPDATE trigger` BEFORE UPDATE ON `subject` FOR EACH ROW INSERT INTO subject_backup 
SELECT * FROM subject
WHERE SubjectID = old.SubjectID
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `subjectcode`
--

CREATE TABLE `subjectcode` (
  `SubjectCode` varchar(255) NOT NULL,
  `SubjectDescription` text,
  `GradeLevel` int(2) NOT NULL,
  `Frequency` int(1) NOT NULL,
  `DateCreated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `subjectcode`
--

INSERT INTO `subjectcode` (`SubjectCode`, `SubjectDescription`, `GradeLevel`, `Frequency`, `DateCreated`) VALUES
('AP 10', NULL, 10, 3, '2019-10-11 11:20:37'),
('AP 7', NULL, 7, 3, '2019-10-11 11:20:37'),
('AP 8', NULL, 8, 3, '2019-10-11 11:20:37'),
('AP 9', NULL, 9, 3, '2019-10-11 11:20:37'),
('ENG 10', NULL, 10, 4, '2019-10-11 11:20:37'),
('ENG 7 ', NULL, 7, 4, '2019-10-11 11:20:37'),
('ENG 8', NULL, 8, 4, '2019-10-11 11:20:37'),
('ENG 9', NULL, 9, 4, '2019-10-11 11:20:37'),
('ESP 10', NULL, 10, 3, '2019-10-11 11:20:37'),
('ESP 7', NULL, 7, 2, '2019-10-11 11:20:37'),
('ESP 8', NULL, 8, 3, '2019-10-11 11:20:37'),
('ESP 9', NULL, 9, 3, '2019-10-11 11:20:37'),
('FIL 10', NULL, 10, 4, '2019-10-11 11:20:37'),
('FIL 7', NULL, 7, 4, '2019-10-11 11:20:37'),
('FIL 8', NULL, 8, 4, '2019-10-11 11:20:37'),
('FIL 9', NULL, 9, 4, '2019-10-11 11:20:37'),
('FOLA 10', NULL, 10, 4, '2019-10-11 11:20:37'),
('FOLA 9', NULL, 9, 4, '2019-10-11 11:20:37'),
('HOMEROOM 10', NULL, 10, 1, '2019-10-11 11:20:37'),
('MAPEH 10', NULL, 10, 3, '2019-10-11 11:20:37'),
('MAPEH 7', NULL, 7, 4, '2019-10-11 11:20:37'),
('MAPEH 8', NULL, 8, 4, '2019-10-11 11:20:37'),
('MAPEH 9', NULL, 9, 4, '2019-10-11 11:20:37'),
('MATH 10A', NULL, 10, 4, '2019-10-11 11:20:37'),
('MATH 10B', NULL, 10, 4, '2019-10-11 11:20:37'),
('MATH 7A', NULL, 7, 4, '2019-10-11 11:20:37'),
('MATH 7B', NULL, 7, 4, '2019-10-11 11:20:37'),
('MATH 8A', NULL, 8, 4, '2019-10-11 11:20:37'),
('MATH 8B', NULL, 8, 4, '2019-10-11 11:20:37'),
('MATH 9A', NULL, 9, 4, '2019-10-11 11:20:37'),
('MATH 9B', NULL, 9, 4, '2019-10-11 11:20:37'),
('RESEARCH 7', NULL, 7, 4, '2019-10-11 11:20:37'),
('RESEARCH 8', NULL, 8, 4, '2019-10-11 11:20:37'),
('SCI 10A', NULL, 10, 4, '2019-10-11 11:20:37'),
('SCI 10B', NULL, 10, 4, '2019-10-11 11:20:37'),
('SCI 7A', NULL, 7, 4, '2019-10-11 11:20:37'),
('SCI 7B', NULL, 7, 4, '2019-10-11 11:20:37'),
('SCI 8A', NULL, 8, 4, '2019-10-11 11:20:37'),
('SCI 8B', NULL, 8, 4, '2019-10-11 11:20:37'),
('SCI 9A', NULL, 9, 4, '2019-10-11 11:20:37'),
('SCI 9B', NULL, 9, 4, '2019-10-11 11:20:37'),
('TLE 10', NULL, 10, 4, '2019-10-11 11:20:37'),
('TLE 7', NULL, 7, 4, '2019-10-11 11:20:37'),
('TLE 8', NULL, 8, 4, '2019-10-11 11:20:37'),
('TLE 9', NULL, 9, 4, '2019-10-11 11:20:37');

--
-- Triggers `subjectcode`
--
DELIMITER $$
CREATE TRIGGER `backup subjectcode` BEFORE DELETE ON `subjectcode` FOR EACH ROW INSERT INTO subjectcode_backup 
SELECT * FROM subjectcode
WHERE SubjectCode = old.SubjectCode
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `backup subjectcode UPDATE trigger` BEFORE UPDATE ON `subjectcode` FOR EACH ROW INSERT INTO subjectcode_backup 
SELECT * FROM subjectcode
WHERE SubjectCode = old.SubjectCode
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `subjectcode_backup`
--

CREATE TABLE `subjectcode_backup` (
  `SubjectCode` varchar(255) NOT NULL,
  `SubjectDescription` text,
  `GradeLevel` int(2) NOT NULL,
  `Frequency` int(1) NOT NULL,
  `DateCreated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `subject_backup`
--

CREATE TABLE `subject_backup` (
  `SubjectID` varchar(255) NOT NULL,
  `SubjectCode` varchar(255) NOT NULL,
  `SectionNum` int(11) NOT NULL,
  `EmployeeNum` int(11) DEFAULT NULL,
  `DateCreated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `teacher`
--

CREATE TABLE `teacher` (
  `EmployeeNum` int(11) DEFAULT NULL,
  `Name` varchar(255) NOT NULL,
  `SectionNum` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `teacher`
--

INSERT INTO `teacher` (`EmployeeNum`, `Name`, `SectionNum`) VALUES
(3, 'Gabon, Carlos Miguel M.', 27),
(4, 'Oprenario, Leslie Alexis M.', NULL),
(5, 'Gabon, Jose M.', 26);

--
-- Triggers `teacher`
--
DELIMITER $$
CREATE TRIGGER `backup teacher` BEFORE DELETE ON `teacher` FOR EACH ROW INSERT INTO teacher_backup 
SELECT * FROM teacher
WHERE EmployeeNum = old.EmployeeNum
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `backup teacher UPDATE trigger` BEFORE UPDATE ON `teacher` FOR EACH ROW INSERT INTO teacher_backup 
SELECT * FROM teacher
WHERE EmployeeNum = old.EmployeeNum
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `teacher_backup`
--

CREATE TABLE `teacher_backup` (
  `EmployeeNum` int(11) DEFAULT NULL,
  `Name` varchar(255) NOT NULL,
  `SectionNum` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `teacher_backup`
--

INSERT INTO `teacher_backup` (`EmployeeNum`, `Name`, `SectionNum`) VALUES
(3, 'Gabon, Carlos Miguel M.', 27),
(4, 'Oprenario, Leslie Alexis M.', NULL),
(5, 'Gabon, Jose M.', 26);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`EmployeeNum`);

--
-- Indexes for table `room`
--
ALTER TABLE `room`
  ADD PRIMARY KEY (`RoomNum`);

--
-- Indexes for table `section`
--
ALTER TABLE `section`
  ADD PRIMARY KEY (`SectionNum`),
  ADD UNIQUE KEY `RoomNum` (`RoomNum`);

--
-- Indexes for table `section_backup`
--
ALTER TABLE `section_backup`
  ADD UNIQUE KEY `RoomNum` (`RoomNum`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`LRNNum`);

--
-- Indexes for table `subject`
--
ALTER TABLE `subject`
  ADD PRIMARY KEY (`SubjectID`);

--
-- Indexes for table `subjectcode`
--
ALTER TABLE `subjectcode`
  ADD PRIMARY KEY (`SubjectCode`);

--
-- Indexes for table `teacher`
--
ALTER TABLE `teacher`
  ADD KEY `EmployeeNum` (`EmployeeNum`),
  ADD KEY `teacher_ibfk_2` (`SectionNum`);

--
-- Indexes for table `teacher_backup`
--
ALTER TABLE `teacher_backup`
  ADD KEY `EmployeeNum` (`EmployeeNum`),
  ADD KEY `teacher_ibfk_2` (`SectionNum`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `EmployeeNum` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `section`
--
ALTER TABLE `section`
  MODIFY `SectionNum` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `section`
--
ALTER TABLE `section`
  ADD CONSTRAINT `section_ibfk_1` FOREIGN KEY (`RoomNum`) REFERENCES `room` (`RoomNum`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `teacher`
--
ALTER TABLE `teacher`
  ADD CONSTRAINT `teacher_ibfk_1` FOREIGN KEY (`EmployeeNum`) REFERENCES `employee` (`EmployeeNum`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `teacher_ibfk_2` FOREIGN KEY (`SectionNum`) REFERENCES `section` (`SectionNum`) ON DELETE SET NULL ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
