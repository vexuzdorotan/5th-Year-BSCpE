-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 10, 2019 at 11:25 AM
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
  `URL_Picture` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`EmployeeNum`, `LastName`, `FirstName`, `MiddleName`, `Birthday`, `Age`, `Street_Address1`, `Street_Address2`, `City`, `Province`, `Country`, `Gender`, `Position`, `URL_Picture`) VALUES
(1, 'Gabon', 'Jose Mari', 'Manuel', '1997-03-28', 22, '#4083 V. Baltazar', 'Pinagbuhatan', 'Pasig', 'Metro Manila', 'Philippines', 'Male', 'Teacher', '../pictures/employee/lulu.jpg'),
(2, 'Oprenario', 'Leslie Alexis', 'Manuel', '1990-03-31', 29, '23 E. Caruncho Avenue', 'Malinao', 'Pasig', 'Metro Manila', 'Philippines', 'Male', 'Teacher', '../pictures/employee/Diane_(Seven_Deadly_Sins).jpg'),
(3, 'Gabon', 'Carlos Miguel', 'Manuel', '2010-01-22', 9, '242 Marigold St', 'Pinagbuhatan', 'Pasig', 'Metro Manila', 'Philippines', 'Male', 'Teacher', '../pictures/employee/lulu.jpg'),
(4, 'Oprenario', 'Leslie Alexis', 'Manuel', '1990-03-31', 29, '23 E. Caruncho Ave,', 'Malinao', 'Pasig City', 'Metro Manila', 'Philippines', 'Male', 'Teacher', '../pictures/employee/401251_393070170706909_1000554163_n.jpg'),
(5, 'Gabon', 'Jose', 'Manuel', '1997-03-28', 22, '242 Marigold St', 'Pinagbuhatan', 'Pasig', 'Metro Manila', 'Philippines', 'Male', 'Teacher', '../pictures/employee/407093_355692657777994_1875201973_n.jpg');

--
-- Triggers `employee`
--
DELIMITER $$
CREATE TRIGGER `AFTER INSERT employee` AFTER INSERT ON `employee` FOR EACH ROW INSERT INTO teacher(EmployeeNum, Name) SELECT EmployeeNum, CONCAT(LastName , ", " , FirstName, " " , LEFT(MiddleName, 1), ".") FROM employee WHERE New.Position = "Teacher" ORDER BY EmployeeNum DESC LIMIT 1
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `room`
--

CREATE TABLE `room` (
  `RoomNum` int(11) NOT NULL,
  `RoomName` varchar(255) DEFAULT NULL,
  `Floor` int(2) NOT NULL,
  `Capacity` int(2) NOT NULL,
  `Type` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `room`
--

INSERT INTO `room` (`RoomNum`, `RoomName`, `Floor`, `Capacity`, `Type`) VALUES
(100, 'Guidance Office', 1, 15, 'Office'),
(101, 'Registrar\'s Office', 1, 15, 'Office'),
(102, 'Civil Department', 1, 15, 'Office'),
(103, 'Computer Department', 1, 15, 'Office'),
(104, 'Electrical Department', 1, 15, 'Office'),
(105, 'Electronics Department', 1, 15, 'Office'),
(107, 'Einstein', 1, 40, 'Classroom'),
(108, 'Curie', 1, 40, 'Classroom'),
(109, 'Copenhagen', 1, 40, 'Classroom'),
(110, 'Newton', 1, 40, 'Classroom'),
(111, 'Hawkin', 1, 40, 'Classroom'),
(200, 'Aristotle', 2, 40, 'Classroom'),
(201, 'Plato', 2, 40, 'Classroom'),
(202, 'Socrates', 2, 40, 'Classroom'),
(203, 'Edison', 2, 40, 'Classroom'),
(204, 'Tesla', 2, 40, 'Classroom'),
(205, '205', 2, 40, 'Classroom'),
(303, '303', 3, 40, 'Classroom'),
(304, '304', 3, 40, 'Classroom'),
(305, '305', 3, 40, 'Classroom');

--
-- Triggers `room`
--
DELIMITER $$
CREATE TRIGGER `AFTER UPDATE room` AFTER UPDATE ON `room` FOR EACH ROW UPDATE section SET RoomNum = NULL WHERE RoomNum IN (SELECT RoomNum FROM room WHERE Type <> "Classroom")
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `sched`
--

CREATE TABLE `sched` (
  `SubjectID` varchar(255) NOT NULL,
  `SubjectTime` varchar(13) NOT NULL,
  `SubjectDay` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sched`
--

INSERT INTO `sched` (`SubjectID`, `SubjectTime`, `SubjectDay`) VALUES
('26-SCI7A', '6:00-7:00', 'Monday'),
('26-SCI7A', '6:00-7:00', 'Wednesday'),
('26-SCI7A', '6:00-7:00', 'Friday'),
('26-ENG7', '7:00-8:00', 'Tuesday'),
('26-ENG7', '7:00-8:00', 'Wednesday'),
('26-ENG7', '7:00-8:00', 'Friday'),
('26-AP7', '7:00-8:00', 'Thursday'),
('26-RESEARCH7', '7:00-8:00', 'Monday'),
('26-MATH7A', '8:00-9:00', 'Monday'),
('26-MATH7A', '8:00-9:00', 'Friday'),
('26-RESEARCH7', '8:00-9:00', 'Tuesday'),
('26-RESEARCH7', '8:00-9:00', 'Wednesday'),
('26-RESEARCH7', '8:00-9:00', 'Thursday'),
('26-MATH7B', '9:20-10:20', 'Monday'),
('26-MATH7B', '9:20-10:20', 'Tuesday'),
('26-MATH7B', '9:20-10:20', 'Wednesday'),
('26-MATH7B', '9:20-10:20', 'Thursday'),
('26-AP7', '9:20-10:20', 'Friday'),
('26-ENG7', '10:20-11:20', 'Monday'),
('26-ESP7', '10:20-11:20', 'Tuesday'),
('26-MATH7A', '10:20-11:20', 'Wednesday'),
('26-AP7', '10:20-11:20', 'Thursday'),
('26-FIL7', '10:20-11:20', 'Friday'),
('26-SCI7B', '11:20-12:20', 'Monday'),
('26-SCI7B', '11:20-12:20', 'Tuesday'),
('26-SCI7B', '11:20-12:20', 'Wednesday'),
('26-SCI7B', '11:20-12:20', 'Friday'),
('26-ESP7', '11:20-12:20', 'Thursday'),
('26-MAPEH7', '1:00-2:00', 'Monday'),
('26-MAPEH7', '1:00-2:00', 'Tuesday'),
('26-FIL7', '1:00-2:00', 'Wednesday'),
('26-FIL7', '1:00-2:00', 'Thursday'),
('26-FIL7', '1:00-2:00', 'Friday'),
('26-TLE7', '2:00-3:00', 'Monday'),
('26-TLE7', '2:00-3:00', 'Tuesday'),
('26-TLE7', '2:00-3:00', 'Thursday'),
('26-TLE7', '2:00-3:00', 'Friday'),
('26-MAPEH7', '3:00-4:00', 'Wednesday'),
('26-MAPEH7', '3:00-4:00', 'Thursday'),
('27-RESEARCH7', '6:00-7:00', 'Monday'),
('27-RESEARCH7', '6:00-7:00', 'Wednesday'),
('27-RESEARCH7', '6:00-7:00', 'Friday'),
('27-RESEARCH7', '6:00-7:00', 'Thursday'),
('27-MATH7A', '7:00-8:00', 'Monday'),
('27-MATH7A', '7:00-8:00', 'Tuesday'),
('27-MATH7A', '7:00-8:00', 'Thursday'),
('27-MATH7A', '7:00-8:00', 'Friday'),
('27-AP7', '7:00-8:00', 'Wednesday'),
('27-SCI7A', '8:00-9:00', 'Monday'),
('27-SCI7A', '8:00-9:00', 'Tuesday'),
('27-SCI7A', '8:00-9:00', 'Wednesday'),
('27-SCI7A', '8:00-9:00', 'Friday'),
('27-AP7', '8:00-9:00', 'Thursday'),
('27-TLE7', '9:20-10:20', 'Monday'),
('27-TLE7', '9:20-10:20', 'Tuesday'),
('27-TLE7', '9:20-10:20', 'Friday'),
('27-ESP7', '9:20-10:20', 'Wednesday'),
('27-ESP7', '9:20-10:20', 'Thursday'),
('27-MATH7B', '10:20-11:20', 'Monday'),
('27-MATH7B', '10:20-11:20', 'Tuesday'),
('27-MATH7B', '10:20-11:20', 'Thursday'),
('27-MATH7B', '10:20-11:20', 'Friday'),
('27-TLE7', '10:20-11:20', 'Wednesday'),
('27-ENG7', '11:20-12:20', 'Monday'),
('27-ENG7', '11:20-12:20', 'Tuesday'),
('27-ENG7', '11:20-12:20', 'Thursday'),
('27-ENG7', '11:20-12:20', 'Friday'),
('27-FIL7', '11:20-12:20', 'Wednesday'),
('27-SCI7B', '1:00-2:00', 'Monday'),
('27-SCI7B', '1:00-2:00', 'Tuesday'),
('27-SCI7B', '1:00-2:00', 'Wednesday'),
('27-SCI7B', '1:00-2:00', 'Thursday'),
('27-MAPEH7', '1:00-2:00', 'Friday'),
('27-MAPEH7', '2:00-3:00', 'Monday'),
('27-MAPEH7', '2:00-3:00', 'Tuesday'),
('27-MAPEH7', '2:00-3:00', 'Thursday'),
('27-FIL7', '3:00-4:00', 'Monday'),
('27-FIL7', '3:00-4:00', 'Tuesday'),
('27-FIL7', '3:00-4:00', 'Thursday'),
('26-MATH7A', '6:00-7:00', 'Thursday'),
('26-SCI7A', '6:00-7:00', 'Tuesday'),
('28-MATH7A', '6:00-7:00', 'Monday'),
('28-MATH7A', '6:00-7:00', 'Tuesday'),
('28-MATH7A', '6:00-7:00', 'Wednesday'),
('28-MATH7A', '6:00-7:00', 'Friday'),
('28-AP7', '6:00-7:00', 'Thursday'),
('28-AP7', '7:00-8:00', 'Monday'),
('28-RESEARCH7', '7:00-8:00', 'Tuesday'),
('28-RESEARCH7', '7:00-8:00', 'Wednesday'),
('28-RESEARCH7', '7:00-8:00', 'Thursday'),
('28-RESEARCH7', '7:00-8:00', 'Friday'),
('28-ENG7', '8:00-9:00', 'Monday'),
('28-ENG7', '8:00-9:00', 'Tuesday'),
('28-ENG7', '8:00-9:00', 'Thursday'),
('28-ENG7', '8:00-9:00', 'Friday'),
('28-AP7', '8:00-9:00', 'Wednesday'),
('28-ESP7', '9:20-10:20', 'Monday'),
('28-ESP7', '9:20-10:20', 'Tuesday'),
('28-MAPEH7', '9:20-10:20', 'Wednesday'),
('28-MAPEH7', '9:20-10:20', 'Thursday'),
('28-MAPEH7', '9:20-10:20', 'Friday'),
('28-SCI7A', '10:20-11:20', 'Monday'),
('28-SCI7A', '10:20-11:20', 'Wednesday'),
('28-SCI7A', '10:20-11:20', 'Thursday'),
('28-SCI7A', '10:20-11:20', 'Friday'),
('28-SCI7B', '10:20-11:20', 'Tuesday'),
('28-MATH7B', '11:20-12:20', 'Monday'),
('28-MAPEH7', '11:20-12:20', 'Tuesday'),
('28-MATH7B', '11:20-12:20', 'Wednesday'),
('28-MATH7B', '11:20-12:20', 'Thursday'),
('28-MATH7B', '11:20-12:20', 'Friday'),
('28-TLE7', '1:00-2:00', 'Monday'),
('28-TLE7', '1:00-2:00', 'Tuesday'),
('28-SCI7B', '1:00-2:00', 'Wednesday'),
('28-TLE7', '1:00-2:00', 'Thursday'),
('28-TLE7', '1:00-2:00', 'Friday'),
('28-FIL7', '2:00-3:00', 'Monday'),
('28-FIL7', '2:00-3:00', 'Tuesday'),
('28-FIL7', '2:00-3:00', 'Wednesday'),
('28-SCI7B', '2:00-3:00', 'Thursday'),
('28-FIL7', '2:00-3:00', 'Friday'),
('28-SCI7B', '3:00-4:00', 'Friday'),
('29-MATH8A', '6:00-7:00', 'Monday'),
('29-MATH8A', '6:00-7:00', 'Tuesday'),
('29-MATH8A', '6:00-7:00', 'Wednesday'),
('29-MATH8A', '6:00-7:00', 'Thursday'),
('29-AP8', '6:00-7:00', 'Friday'),
('29-SCI8B', '7:00-8:00', 'Monday'),
('29-SCI8B', '7:00-8:00', 'Tuesday'),
('29-SCI8B', '7:00-8:00', 'Wednesday'),
('29-SCI8B', '7:00-8:00', 'Friday'),
('29-AP8', '7:00-8:00', 'Thursday'),
('29-ESP8', '8:00-9:00', 'Monday'),
('29-ESP8', '8:00-9:00', 'Wednesday'),
('29-AP8', '8:00-9:00', 'Tuesday'),
('29-TLE8', '8:00-9:00', 'Friday'),
('29-MATH8B', '9:20-10:20', 'Monday'),
('29-MATH8B', '9:20-10:20', 'Tuesday'),
('29-MATH8B', '9:20-10:20', 'Wednesday'),
('29-MATH8B', '9:20-10:20', 'Friday'),
('29-TLE8', '9:20-10:20', 'Thursday'),
('29-MAPEH8', '10:20-11:20', 'Monday'),
('29-MAPEH8', '10:20-11:20', 'Tuesday'),
('29-MAPEH8', '10:20-11:20', 'Friday'),
('29-TLE8', '10:20-11:20', 'Wednesday'),
('29-ENG8', '10:20-11:20', 'Thursday'),
('29-SCI8A', '11:20-12:20', 'Monday'),
('29-SCI8A', '11:20-12:20', 'Tuesday'),
('29-SCI8A', '11:20-12:20', 'Thursday'),
('29-SCI8A', '11:20-12:20', 'Friday'),
('29-TLE8', '11:20-12:20', 'Wednesday'),
('29-MAPEH8', '1:00-2:00', 'Wednesday'),
('29-RESEARCH8', '1:00-2:00', 'Tuesday'),
('29-RESEARCH8', '1:00-2:00', 'Monday'),
('29-RESEARCH8', '1:00-2:00', 'Thursday'),
('29-RESEARCH8', '1:00-2:00', 'Friday'),
('29-ENG8', '2:00-3:00', 'Monday'),
('29-ENG8', '2:00-3:00', 'Tuesday'),
('29-ENG8', '2:00-3:00', 'Thursday'),
('29-FIL8', '2:00-3:00', 'Friday'),
('29-FIL8', '3:00-4:00', 'Monday'),
('29-FIL8', '3:00-4:00', 'Tuesday'),
('29-FIL8', '3:00-4:00', 'Thursday'),
('30-ESP8', '6:00-7:00', 'Wednesday'),
('30-TLE8', '6:00-7:00', 'Monday'),
('30-TLE8', '6:00-7:00', 'Tuesday'),
('30-TLE8', '6:00-7:00', 'Thursday'),
('30-TLE8', '6:00-7:00', 'Friday'),
('30-ESP8', '7:00-8:00', 'Monday'),
('30-MATH8A', '7:00-8:00', 'Tuesday'),
('30-MATH8A', '7:00-8:00', 'Wednesday'),
('30-MATH8A', '7:00-8:00', 'Thursday'),
('30-MATH8A', '7:00-8:00', 'Friday'),
('30-AP8', '8:00-9:00', 'Monday'),
('30-AP8', '8:00-9:00', 'Wednesday'),
('30-AP8', '8:00-9:00', 'Thursday'),
('29-ESP8', '8:00-9:00', 'Thursday'),
('30-ESP8', '8:00-9:00', 'Tuesday'),
('30-RESEARCH8', '8:00-9:00', 'Friday'),
('30-SCI8B', '9:20-10:20', 'Monday'),
('30-SCI8B', '9:20-10:20', 'Tuesday'),
('30-SCI8B', '9:20-10:20', 'Wednesday'),
('30-SCI8B', '9:20-10:20', 'Thursday'),
('30-RESEARCH8', '9:20-10:20', 'Friday'),
('30-MATH8B', '10:20-11:20', 'Monday'),
('30-MATH8B', '10:20-11:20', 'Tuesday'),
('30-RESEARCH8', '10:20-11:20', 'Wednesday'),
('30-MATH8B', '10:20-11:20', 'Thursday'),
('30-MATH8B', '10:20-11:20', 'Friday'),
('30-ENG8', '11:20-12:20', 'Monday'),
('30-ENG8', '11:20-12:20', 'Wednesday'),
('30-ENG8', '11:20-12:20', 'Thursday'),
('30-MAPEH8', '11:20-12:20', 'Tuesday'),
('30-MAPEH8', '11:20-12:20', 'Friday'),
('30-FIL8', '1:00-2:00', 'Monday'),
('30-FIL8', '1:00-2:00', 'Tuesday'),
('30-FIL8', '1:00-2:00', 'Wednesday'),
('30-FIL8', '1:00-2:00', 'Friday'),
('30-SCI8A', '2:00-3:00', 'Monday'),
('30-SCI8A', '2:00-3:00', 'Tuesday'),
('30-SCI8A', '2:00-3:00', 'Wednesday'),
('30-MAPEH8', '2:00-3:00', 'Thursday'),
('30-MAPEH8', '3:00-4:00', 'Wednesday'),
('30-SCI8A', '3:00-4:00', 'Thursday'),
('30-RESEARCH8', '1:00-2:00', 'Thursday'),
('30-ENG8', '3:00-4:00', 'Tuesday'),
('31-SCI9A', '6:00-7:00', 'Monday'),
('31-SCI9A', '6:00-7:00', 'Tuesday'),
('31-SCI9A', '6:00-7:00', 'Wednesday'),
('31-AP9', '6:00-7:00', 'Thursday'),
('31-SCI9A', '6:00-7:00', 'Friday'),
('31-TLE9', '7:00-8:00', 'Monday'),
('31-TLE9', '7:00-8:00', 'Tuesday'),
('31-AP9', '7:00-8:00', 'Wednesday'),
('31-TLE9', '7:00-8:00', 'Thursday'),
('31-TLE9', '7:00-8:00', 'Friday'),
('31-SCI9B', '8:00-9:00', 'Monday'),
('31-SCI9B', '8:00-9:00', 'Tuesday'),
('31-SCI9B', '8:00-9:00', 'Wednesday'),
('31-SCI9B', '8:00-9:00', 'Thursday'),
('31-AP9', '8:00-9:00', 'Friday'),
('31-MATH9B', '9:20-10:20', 'Monday'),
('31-MATH9B', '9:20-10:20', 'Tuesday'),
('31-MATH9B', '9:20-10:20', 'Wednesday'),
('31-MATH9B', '9:20-10:20', 'Thursday'),
('31-ESP9', '9:20-10:20', 'Friday'),
('31-FOLA9', '10:20-11:20', 'Monday'),
('31-FOLA9', '10:20-11:20', 'Tuesday'),
('31-FOLA9', '10:20-11:20', 'Wednesday'),
('31-ESP9', '10:20-11:20', 'Thursday'),
('31-FOLA9', '10:20-11:20', 'Friday'),
('31-MATH9A', '11:20-12:20', 'Monday'),
('31-MATH9A', '11:20-12:20', 'Tuesday'),
('31-MATH9A', '11:20-12:20', 'Wednesday'),
('31-MATH9A', '11:20-12:20', 'Thursday'),
('31-ESP9', '11:20-12:20', 'Friday'),
('31-ENG9', '1:00-2:00', 'Monday'),
('31-ENG9', '1:00-2:00', 'Tuesday'),
('31-ENG9', '1:00-2:00', 'Wednesday'),
('31-ENG9', '1:00-2:00', 'Friday'),
('31-MAPEH9', '1:00-2:00', 'Thursday'),
('31-FIL9', '2:00-3:00', 'Tuesday'),
('31-FIL9', '2:00-3:00', 'Wednesday'),
('31-FIL9', '2:00-3:00', 'Thursday'),
('31-MAPEH9', '2:00-3:00', 'Monday'),
('31-MAPEH9', '2:00-3:00', 'Friday'),
('31-MAPEH9', '3:00-4:00', 'Tuesday'),
('31-FIL9', '3:00-4:00', 'Friday'),
('32-AP9', '6:00-7:00', 'Monday'),
('32-AP9', '6:00-7:00', 'Tuesday'),
('32-AP9', '6:00-7:00', 'Wednesday'),
('32-ESP9', '6:00-7:00', 'Thursday'),
('32-ESP9', '6:00-7:00', 'Friday'),
('32-SCI9A', '7:00-8:00', 'Monday'),
('32-SCI9A', '7:00-8:00', 'Tuesday'),
('32-SCI9A', '7:00-8:00', 'Wednesday'),
('32-ESP9', '7:00-8:00', 'Thursday'),
('32-SCI9A', '7:00-8:00', 'Friday'),
('32-TLE9', '8:00-9:00', 'Monday'),
('32-TLE9', '8:00-9:00', 'Tuesday'),
('32-TLE9', '8:00-9:00', 'Wednesday'),
('32-TLE9', '8:00-9:00', 'Thursday'),
('32-MATH9B', '8:00-9:00', 'Friday'),
('32-SCI9B', '9:20-10:20', 'Monday'),
('32-SCI9B', '9:20-10:20', 'Tuesday'),
('32-SCI9B', '9:20-10:20', 'Wednesday'),
('32-SCI9B', '9:20-10:20', 'Thursday'),
('32-MATH9B', '10:20-11:20', 'Monday'),
('32-MATH9B', '10:20-11:20', 'Wednesday'),
('32-MATH9B', '10:20-11:20', 'Thursday'),
('32-FIL9', '10:20-11:20', 'Tuesday'),
('32-FIL9', '10:20-11:20', 'Friday'),
('32-FOLA9', '11:20-12:20', 'Monday'),
('32-FOLA9', '11:20-12:20', 'Tuesday'),
('32-FIL9', '11:20-12:20', 'Wednesday'),
('32-FOLA9', '11:20-12:20', 'Thursday'),
('32-FOLA9', '11:20-12:20', 'Friday'),
('32-MAPEH9', '1:00-2:00', 'Monday'),
('32-MAPEH9', '1:00-2:00', 'Tuesday'),
('32-MAPEH9', '1:00-2:00', 'Friday'),
('32-MATH9A', '1:00-2:00', 'Wednesday'),
('32-ENG9', '1:00-2:00', 'Thursday'),
('32-MATH9A', '2:00-3:00', 'Tuesday'),
('32-MATH9A', '2:00-3:00', 'Thursday'),
('32-MATH9A', '2:00-3:00', 'Friday'),
('32-FIL9', '2:00-3:00', 'Monday'),
('32-MAPEH9', '2:00-3:00', 'Wednesday'),
('32-ENG9', '3:00-4:00', 'Monday'),
('32-ENG9', '3:00-4:00', 'Wednesday'),
('32-ENG9', '3:00-4:00', 'Friday'),
('33-ENG10', '6:00-7:00', 'Monday'),
('33-ENG10', '6:00-7:00', 'Tuesday'),
('33-AP10', '6:00-7:00', 'Wednesday'),
('33-ENG10', '6:00-7:00', 'Thursday'),
('33-ENG10', '6:00-7:00', 'Friday'),
('33-FOLA10', '7:00-8:00', 'Monday'),
('33-AP10', '7:00-8:00', 'Tuesday'),
('33-FOLA10', '7:00-8:00', 'Wednesday'),
('33-FOLA10', '7:00-8:00', 'Thursday'),
('33-FOLA10', '7:00-8:00', 'Friday'),
('33-MATH10A', '8:00-9:00', 'Monday'),
('33-MATH10A', '8:00-9:00', 'Tuesday'),
('33-MATH10A', '8:00-9:00', 'Wednesday'),
('33-ESP10', '8:00-9:00', 'Thursday'),
('33-MATH10A', '8:00-9:00', 'Friday'),
('33-AP10', '9:20-10:20', 'Monday'),
('33-SCI10A', '9:20-10:20', 'Tuesday'),
('33-SCI10A', '9:20-10:20', 'Wednesday'),
('33-SCI10A', '9:20-10:20', 'Thursday'),
('33-SCI10A', '9:20-10:20', 'Friday'),
('33-TLE10', '10:20-11:20', 'Monday'),
('33-TLE10', '10:20-11:20', 'Tuesday'),
('33-ESP10', '10:20-11:20', 'Wednesday'),
('33-TLE10', '10:20-11:20', 'Thursday'),
('33-TLE10', '10:20-11:20', 'Friday'),
('33-FIL10', '11:20-12:20', 'Monday'),
('33-FIL10', '11:20-12:20', 'Thursday'),
('33-FIL10', '11:20-12:20', 'Friday'),
('33-ESP10', '11:20-12:20', 'Tuesday'),
('33-MATH10B', '11:20-12:20', 'Wednesday'),
('33-MATH10B', '1:00-2:00', 'Monday'),
('33-MATH10B', '1:00-2:00', 'Thursday'),
('33-MATH10B', '1:00-2:00', 'Friday'),
('33-HOMEROOM10', '1:00-2:00', 'Wednesday'),
('33-FIL10', '1:00-2:00', 'Tuesday'),
('33-SCI10B', '2:00-3:00', 'Monday'),
('33-SCI10B', '2:00-3:00', 'Tuesday'),
('33-SCI10B', '2:00-3:00', 'Thursday'),
('33-MAPEH10', '2:00-3:00', 'Wednesday'),
('33-SCI10B', '2:00-3:00', 'Friday'),
('33-MAPEH10', '3:00-4:00', 'Monday'),
('33-MAPEH10', '3:00-4:00', 'Tuesday'),
('27-AP7', '6:00-7:00', 'Tuesday');

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

-- --------------------------------------------------------

--
-- Table structure for table `sched_backup`
--

CREATE TABLE `sched_backup` (
  `SubjectID` varchar(255) NOT NULL,
  `SubjectCode` varchar(255) NOT NULL,
  `SectionNum` int(11) NOT NULL,
  `SubjectTime` varchar(13) NOT NULL,
  `SubjectDay` varchar(10) NOT NULL,
  `EmployeeNum` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sched_backup`
--

INSERT INTO `sched_backup` (`SubjectID`, `SubjectCode`, `SectionNum`, `SubjectTime`, `SubjectDay`, `EmployeeNum`) VALUES
('26-SCI7A', 'SCI 7A', 26, '6:00-7:00', 'Monday', NULL),
('26-SCI7A', 'SCI 7A', 26, '6:00-7:00', 'Wednesday', NULL),
('26-SCI7A', 'SCI 7A', 26, '6:00-7:00', 'Friday', NULL),
('26-ENG7', 'ENG 7 ', 26, '7:00-8:00', 'Tuesday', NULL),
('26-ENG7', 'ENG 7 ', 26, '7:00-8:00', 'Wednesday', NULL),
('26-ENG7', 'ENG 7 ', 26, '7:00-8:00', 'Friday', NULL),
('26-AP7', 'AP 7', 26, '7:00-8:00', 'Thursday', NULL),
('26-RESEARCH7', 'RESEARCH 7', 26, '7:00-8:00', 'Monday', NULL),
('26-MATH7A', 'MATH 7A', 26, '8:00-9:00', 'Monday', NULL),
('26-MATH7A', 'MATH 7A', 26, '8:00-9:00', 'Friday', NULL),
('26-RESEARCH7', 'RESEARCH 7', 26, '8:00-9:00', 'Tuesday', NULL),
('26-RESEARCH7', 'RESEARCH 7', 26, '8:00-9:00', 'Wednesday', NULL),
('26-RESEARCH7', 'RESEARCH 7', 26, '8:00-9:00', 'Thursday', NULL),
('26-MATH7B', 'MATH 7B', 26, '9:20-10:20', 'Monday', NULL),
('26-MATH7B', 'MATH 7B', 26, '9:20-10:20', 'Tuesday', NULL),
('26-MATH7B', 'MATH 7B', 26, '9:20-10:20', 'Wednesday', NULL),
('26-MATH7B', 'MATH 7B', 26, '9:20-10:20', 'Thursday', NULL),
('26-AP7', 'AP 7', 26, '9:20-10:20', 'Friday', NULL),
('26-ENG7', 'ENG 7 ', 26, '10:20-11:20', 'Monday', NULL),
('26-ESP7', 'ESP 7', 26, '10:20-11:20', 'Tuesday', NULL),
('26-MATH7A', 'MATH 7A', 26, '10:20-11:20', 'Wednesday', NULL),
('26-AP7', 'AP 7', 26, '10:20-11:20', 'Thursday', NULL),
('26-FIL7', 'FIL 7', 26, '10:20-11:20', 'Friday', NULL),
('26-SCI7B', 'SCI 7B', 26, '11:20-12:20', 'Monday', NULL),
('26-SCI7B', 'SCI 7B', 26, '11:20-12:20', 'Tuesday', NULL),
('26-SCI7B', 'SCI 7B', 26, '11:20-12:20', 'Wednesday', NULL),
('26-SCI7B', 'SCI 7B', 26, '11:20-12:20', 'Friday', NULL),
('26-ESP7', 'ESP 7', 26, '11:20-12:20', 'Thursday', NULL),
('26-MAPEH7', 'MAPEH 7', 26, '1:00-2:00', 'Monday', NULL),
('26-MAPEH7', 'MAPEH 7', 26, '1:00-2:00', 'Tuesday', NULL),
('26-FIL7', 'FIL 7', 26, '1:00-2:00', 'Wednesday', NULL),
('26-FIL7', 'FIL 7', 26, '1:00-2:00', 'Thursday', NULL),
('26-FIL7', 'FIL 7', 26, '1:00-2:00', 'Friday', NULL),
('26-TLE7', 'TLE 7', 26, '2:00-3:00', 'Monday', NULL),
('26-TLE7', 'TLE 7', 26, '2:00-3:00', 'Tuesday', NULL),
('26-TLE7', 'TLE 7', 26, '2:00-3:00', 'Thursday', NULL),
('26-TLE7', 'TLE 7', 26, '2:00-3:00', 'Friday', NULL),
('26-MAPEH7', 'MAPEH 7', 26, '3:00-4:00', 'Wednesday', NULL),
('26-MAPEH7', 'MAPEH 7', 26, '3:00-4:00', 'Thursday', NULL),
('27-RESEARCH7', 'RESEARCH 7', 27, '6:00-7:00', 'Monday', NULL),
('27-RESEARCH7', 'RESEARCH 7', 27, '6:00-7:00', 'Wednesday', NULL),
('27-RESEARCH7', 'RESEARCH 7', 27, '6:00-7:00', 'Friday', NULL),
('27-RESEARCH7', 'RESEARCH 7', 27, '6:00-7:00', 'Thursday', NULL),
('27-MATH7A', 'MATH 7A', 27, '7:00-8:00', 'Monday', NULL),
('27-MATH7A', 'MATH 7A', 27, '7:00-8:00', 'Tuesday', NULL),
('27-MATH7A', 'MATH 7A', 27, '7:00-8:00', 'Thursday', NULL),
('27-MATH7A', 'MATH 7A', 27, '7:00-8:00', 'Friday', NULL),
('27-AP7', 'AP 7', 27, '7:00-8:00', 'Wednesday', NULL),
('27-SCI7A', 'SCI 7A', 27, '8:00-9:00', 'Monday', NULL),
('27-SCI7A', 'SCI 7A', 27, '8:00-9:00', 'Tuesday', NULL),
('27-SCI7A', 'SCI 7A', 27, '8:00-9:00', 'Wednesday', NULL),
('27-SCI7A', 'SCI 7A', 27, '8:00-9:00', 'Friday', NULL),
('27-AP7', 'AP 7', 27, '8:00-9:00', 'Thursday', NULL),
('27-TLE7', 'TLE 7', 27, '9:20-10:20', 'Monday', NULL),
('27-TLE7', 'TLE 7', 27, '9:20-10:20', 'Tuesday', NULL),
('27-TLE7', 'TLE 7', 27, '9:20-10:20', 'Friday', NULL),
('27-ESP7', 'ESP 7', 27, '9:20-10:20', 'Wednesday', NULL),
('27-ESP7', 'ESP 7', 27, '9:20-10:20', 'Thursday', NULL),
('27-MATH7B', 'MATH 7B', 27, '10:20-11:20', 'Monday', NULL),
('27-MATH7B', 'MATH 7B', 27, '10:20-11:20', 'Tuesday', NULL),
('27-MATH7B', 'MATH 7B', 27, '10:20-11:20', 'Thursday', NULL),
('27-MATH7B', 'MATH 7B', 27, '10:20-11:20', 'Friday', NULL),
('27-TLE7', 'TLE 7', 27, '10:20-11:20', 'Wednesday', NULL),
('27-ENG7', 'ENG 7 ', 27, '11:20-12:20', 'Monday', NULL),
('27-ENG7', 'ENG 7 ', 27, '11:20-12:20', 'Tuesday', NULL),
('27-ENG7', 'ENG 7 ', 27, '11:20-12:20', 'Thursday', NULL),
('27-ENG7', 'ENG 7 ', 27, '11:20-12:20', 'Friday', NULL),
('27-FIL7', 'FIL 7', 27, '11:20-12:20', 'Wednesday', NULL),
('27-SCI7B', 'SCI 7B', 27, '1:00-2:00', 'Monday', NULL),
('27-SCI7B', 'SCI 7B', 27, '1:00-2:00', 'Tuesday', NULL),
('27-SCI7B', 'SCI 7B', 27, '1:00-2:00', 'Wednesday', NULL),
('27-SCI7B', 'SCI 7B', 27, '1:00-2:00', 'Thursday', NULL),
('27-MAPEH7', 'MAPEH 7', 27, '1:00-2:00', 'Friday', NULL),
('27-MAPEH7', 'MAPEH 7', 27, '2:00-3:00', 'Monday', NULL),
('27-MAPEH7', 'MAPEH 7', 27, '2:00-3:00', 'Tuesday', NULL),
('27-MAPEH7', 'MAPEH 7', 27, '2:00-3:00', 'Thursday', NULL),
('27-FIL7', 'FIL 7', 27, '3:00-4:00', 'Monday', NULL),
('27-FIL7', 'FIL 7', 27, '3:00-4:00', 'Tuesday', NULL),
('27-FIL7', 'FIL 7', 27, '3:00-4:00', 'Thursday', NULL),
('27-AP7', 'AP 7', 27, '6:00-7:00', 'Tuesday', NULL),
('26-MATH7A', 'MATH 7A', 26, '6:00-7:00', 'Thursday', NULL),
('26-SCI7A', 'SCI 7A', 26, '6:00-7:00', 'Tuesday', NULL),
('28-MATH7A', 'MATH 7A', 28, '6:00-7:00', 'Monday', NULL),
('28-MATH7A', 'MATH 7A', 28, '6:00-7:00', 'Tuesday', NULL),
('28-MATH7A', 'MATH 7A', 28, '6:00-7:00', 'Wednesday', NULL),
('28-MATH7A', 'MATH 7A', 28, '6:00-7:00', 'Friday', NULL),
('28-AP7', 'AP 7', 28, '6:00-7:00', 'Thursday', NULL),
('28-AP7', 'AP 7', 28, '7:00-8:00', 'Monday', NULL),
('28-RESEARCH7', 'RESEARCH 7', 28, '7:00-8:00', 'Tuesday', NULL),
('28-RESEARCH7', 'RESEARCH 7', 28, '7:00-8:00', 'Wednesday', NULL),
('28-RESEARCH7', 'RESEARCH 7', 28, '7:00-8:00', 'Thursday', NULL),
('28-RESEARCH7', 'RESEARCH 7', 28, '7:00-8:00', 'Friday', NULL),
('28-ENG7', 'ENG 7 ', 28, '8:00-9:00', 'Monday', NULL),
('28-ENG7', 'ENG 7 ', 28, '8:00-9:00', 'Tuesday', NULL),
('28-ENG7', 'ENG 7 ', 28, '8:00-9:00', 'Thursday', NULL),
('28-ENG7', 'ENG 7 ', 28, '8:00-9:00', 'Friday', NULL),
('28-AP7', 'AP 7', 28, '8:00-9:00', 'Wednesday', NULL),
('28-ESP7', 'ESP 7', 28, '9:20-10:20', 'Monday', NULL),
('27-RESEARCH7', 'RESEARCH 7', 27, '9:00-9:20', 'Wednesday', NULL),
('26-RESEARCH7', 'RESEARCH 7', 26, '9:00-9:20', 'Wednesday', NULL),
('28-ESP7', 'ESP 7', 28, '9:20-10:20', 'Tuesday', NULL),
('28-MAPEH7', 'MAPEH 7', 28, '9:20-10:20', 'Wednesday', NULL),
('28-MAPEH7', 'MAPEH 7', 28, '9:20-10:20', 'Thursday', NULL),
('28-MAPEH7', 'MAPEH 7', 28, '9:20-10:20', 'Friday', NULL),
('28-SCI7A', 'SCI 7A', 28, '10:20-11:20', 'Monday', NULL),
('28-SCI7A', 'SCI 7A', 28, '10:20-11:20', 'Wednesday', NULL),
('28-SCI7A', 'SCI 7A', 28, '10:20-11:20', 'Thursday', NULL),
('28-SCI7A', 'SCI 7A', 28, '10:20-11:20', 'Friday', NULL),
('28-SCI7B', 'SCI 7B', 28, '10:20-11:20', 'Tuesday', NULL),
('28-MATH7B', 'MATH 7B', 28, '11:20-12:20', 'Monday', NULL),
('28-MAPEH7', 'MAPEH 7', 28, '11:20-12:20', 'Tuesday', NULL),
('28-MATH7B', 'MATH 7B', 28, '11:20-12:20', 'Wednesday', NULL),
('28-MATH7B', 'MATH 7B', 28, '11:20-12:20', 'Thursday', NULL),
('28-MATH7B', 'MATH 7B', 28, '11:20-12:20', 'Friday', NULL),
('28-TLE7', 'TLE 7', 28, '1:00-2:00', 'Monday', NULL),
('28-TLE7', 'TLE 7', 28, '1:00-2:00', 'Tuesday', NULL),
('28-SCI7B', 'SCI 7B', 28, '1:00-2:00', 'Wednesday', NULL),
('28-TLE7', 'TLE 7', 28, '1:00-2:00', 'Thursday', NULL),
('28-TLE7', 'TLE 7', 28, '1:00-2:00', 'Friday', NULL),
('28-FIL7', 'FIL 7', 28, '2:00-3:00', 'Monday', NULL),
('28-FIL7', 'FIL 7', 28, '2:00-3:00', 'Tuesday', NULL),
('28-FIL7', 'FIL 7', 28, '2:00-3:00', 'Wednesday', NULL),
('28-SCI7B', 'SCI 7B', 28, '2:00-3:00', 'Thursday', NULL),
('28-FIL7', 'FIL 7', 28, '2:00-3:00', 'Friday', NULL),
('28-SCI7B', 'SCI 7B', 28, '3:00-4:00', 'Friday', NULL),
('29-MATH8A', 'MATH 8A', 29, '6:00-7:00', 'Monday', NULL),
('29-MATH8A', 'MATH 8A', 29, '6:00-7:00', 'Tuesday', NULL),
('29-MATH8A', 'MATH 8A', 29, '6:00-7:00', 'Wednesday', NULL),
('29-MATH8A', 'MATH 8A', 29, '6:00-7:00', 'Thursday', NULL),
('29-AP8', 'AP 8', 29, '6:00-7:00', 'Friday', NULL),
('29-SCI8B', 'SCI 8B', 29, '7:00-8:00', 'Monday', NULL),
('29-SCI8B', 'SCI 8B', 29, '7:00-8:00', 'Tuesday', NULL),
('29-SCI8B', 'SCI 8B', 29, '7:00-8:00', 'Wednesday', NULL),
('29-SCI8B', 'SCI 8B', 29, '7:00-8:00', 'Friday', NULL),
('29-AP8', 'AP 8', 29, '7:00-8:00', 'Thursday', NULL),
('29-ESP8', 'ESP 8', 29, '8:00-9:00', 'Monday', NULL),
('29-ESP8', 'ESP 8', 29, '8:00-9:00', 'Wednesday', NULL),
('29-AP8', 'AP 8', 29, '8:00-9:00', 'Tuesday', NULL),
('29-TLE8', 'TLE 8', 29, '8:00-9:00', 'Friday', NULL),
('29-MATH8B', 'MATH 8B', 29, '9:20-10:20', 'Monday', NULL),
('29-MATH8B', 'MATH 8B', 29, '9:20-10:20', 'Tuesday', NULL),
('29-MATH8B', 'MATH 8B', 29, '9:20-10:20', 'Wednesday', NULL),
('29-MATH8B', 'MATH 8B', 29, '9:20-10:20', 'Friday', NULL),
('29-TLE8', 'TLE 8', 29, '9:20-10:20', 'Thursday', NULL),
('29-MAPEH8', 'MAPEH 8', 29, '10:20-11:20', 'Monday', NULL),
('29-MAPEH8', 'MAPEH 8', 29, '10:20-11:20', 'Tuesday', NULL),
('29-MAPEH8', 'MAPEH 8', 29, '10:20-11:20', 'Friday', NULL),
('29-TLE8', 'TLE 8', 29, '10:20-11:20', 'Wednesday', NULL),
('29-ENG8', 'ENG 8', 29, '10:20-11:20', 'Thursday', NULL),
('29-SCI8A', 'SCI 8A', 29, '11:20-12:20', 'Monday', NULL),
('29-SCI8A', 'SCI 8A', 29, '11:20-12:20', 'Tuesday', NULL),
('29-SCI8A', 'SCI 8A', 29, '11:20-12:20', 'Thursday', NULL),
('29-SCI8A', 'SCI 8A', 29, '11:20-12:20', 'Friday', NULL),
('29-TLE8', 'TLE 8', 29, '11:20-12:20', 'Wednesday', NULL),
('29-MAPEH8', 'MAPEH 8', 29, '1:00-2:00', 'Wednesday', NULL),
('29-RESEARCH8', 'RESEARCH 8', 29, '1:00-2:00', 'Tuesday', NULL),
('29-RESEARCH8', 'RESEARCH 8', 29, '1:00-2:00', 'Monday', NULL),
('29-RESEARCH8', 'RESEARCH 8', 29, '1:00-2:00', 'Thursday', NULL),
('29-RESEARCH8', 'RESEARCH 8', 29, '1:00-2:00', 'Friday', NULL),
('29-ENG8', 'ENG 8', 29, '2:00-3:00', 'Monday', NULL),
('29-ENG8', 'ENG 8', 29, '2:00-3:00', 'Tuesday', NULL),
('29-ENG8', 'ENG 8', 29, '2:00-3:00', 'Thursday', NULL),
('29-FIL8', 'FIL 8', 29, '2:00-3:00', 'Friday', NULL),
('29-FIL8', 'FIL 8', 29, '3:00-4:00', 'Monday', NULL),
('29-FIL8', 'FIL 8', 29, '3:00-4:00', 'Tuesday', NULL),
('29-FIL8', 'FIL 8', 29, '3:00-4:00', 'Thursday', NULL),
('30-ESP8', 'ESP 8', 30, '6:00-7:00', 'Wednesday', NULL),
('30-TLE8', 'TLE 8', 30, '6:00-7:00', 'Monday', NULL),
('30-TLE8', 'TLE 8', 30, '6:00-7:00', 'Tuesday', NULL),
('30-TLE8', 'TLE 8', 30, '6:00-7:00', 'Thursday', NULL),
('30-TLE8', 'TLE 8', 30, '6:00-7:00', 'Friday', NULL),
('30-ESP8', 'ESP 8', 30, '7:00-8:00', 'Monday', NULL),
('30-MATH8A', 'MATH 8A', 30, '7:00-8:00', 'Tuesday', NULL),
('30-MATH8A', 'MATH 8A', 30, '7:00-8:00', 'Wednesday', NULL),
('30-MATH8A', 'MATH 8A', 30, '7:00-8:00', 'Thursday', NULL),
('30-MATH8A', 'MATH 8A', 30, '7:00-8:00', 'Friday', NULL),
('30-AP8', 'AP 8', 30, '8:00-9:00', 'Monday', NULL),
('30-AP8', 'AP 8', 30, '8:00-9:00', 'Wednesday', NULL),
('30-AP8', 'AP 8', 30, '8:00-9:00', 'Thursday', NULL),
('29-ESP8', 'ESP 8', 29, '8:00-9:00', 'Thursday', NULL),
('30-ESP8', 'ESP 8', 30, '8:00-9:00', 'Tuesday', NULL),
('30-RESEARCH8', 'RESEARCH 8', 30, '8:00-9:00', 'Friday', NULL),
('30-SCI8B', 'SCI 8B', 30, '9:20-10:20', 'Monday', NULL),
('30-SCI8B', 'SCI 8B', 30, '9:20-10:20', 'Tuesday', NULL),
('30-SCI8B', 'SCI 8B', 30, '9:20-10:20', 'Wednesday', NULL),
('30-SCI8B', 'SCI 8B', 30, '9:20-10:20', 'Thursday', NULL),
('30-RESEARCH8', 'RESEARCH 8', 30, '9:20-10:20', 'Friday', NULL),
('30-MATH8B', 'MATH 8B', 30, '10:20-11:20', 'Monday', NULL),
('30-MATH8B', 'MATH 8B', 30, '10:20-11:20', 'Tuesday', NULL),
('30-RESEARCH8', 'RESEARCH 8', 30, '10:20-11:20', 'Wednesday', NULL),
('30-MATH8B', 'MATH 8B', 30, '10:20-11:20', 'Thursday', NULL),
('30-MATH8B', 'MATH 8B', 30, '10:20-11:20', 'Friday', NULL),
('30-ENG8', 'ENG 8', 30, '11:20-12:20', 'Monday', NULL),
('30-ENG8', 'ENG 8', 30, '11:20-12:20', 'Wednesday', NULL),
('30-ENG8', 'ENG 8', 30, '11:20-12:20', 'Thursday', NULL),
('30-MAPEH8', 'MAPEH 8', 30, '11:20-12:20', 'Tuesday', NULL),
('30-MAPEH8', 'MAPEH 8', 30, '11:20-12:20', 'Friday', NULL),
('30-FIL8', 'FIL 8', 30, '1:00-2:00', 'Monday', NULL),
('30-FIL8', 'FIL 8', 30, '1:00-2:00', 'Tuesday', NULL),
('30-FIL8', 'FIL 8', 30, '1:00-2:00', 'Wednesday', NULL),
('30-FIL8', 'FIL 8', 30, '1:00-2:00', 'Friday', NULL),
('30-SCI8A', 'SCI 8A', 30, '2:00-3:00', 'Monday', NULL),
('30-SCI8A', 'SCI 8A', 30, '2:00-3:00', 'Tuesday', NULL),
('30-SCI8A', 'SCI 8A', 30, '2:00-3:00', 'Wednesday', NULL),
('30-MAPEH8', 'MAPEH 8', 30, '2:00-3:00', 'Thursday', NULL),
('30-MAPEH8', 'MAPEH 8', 30, '3:00-4:00', 'Wednesday', NULL),
('30-SCI8A', 'SCI 8A', 30, '3:00-4:00', 'Thursday', NULL),
('30-RESEARCH8', 'RESEARCH 8', 30, '1:00-2:00', 'Thursday', NULL),
('30-ENG8', 'ENG 8', 30, '3:00-4:00', 'Tuesday', NULL),
('31-SCI9A', 'SCI 9A', 31, '6:00-7:00', 'Monday', NULL),
('31-SCI9A', 'SCI 9A', 31, '6:00-7:00', 'Tuesday', NULL),
('31-SCI9A', 'SCI 9A', 31, '6:00-7:00', 'Wednesday', NULL),
('31-AP9', 'AP 9', 31, '6:00-7:00', 'Thursday', NULL),
('31-SCI9A', 'SCI 9A', 31, '6:00-7:00', 'Friday', NULL),
('31-TLE9', 'TLE 9', 31, '7:00-8:00', 'Monday', NULL),
('31-TLE9', 'TLE 9', 31, '7:00-8:00', 'Tuesday', NULL),
('31-AP9', 'AP 9', 31, '7:00-8:00', 'Wednesday', NULL),
('31-TLE9', 'TLE 9', 31, '7:00-8:00', 'Thursday', NULL),
('31-TLE9', 'TLE 9', 31, '7:00-8:00', 'Friday', NULL),
('31-SCI9B', 'SCI 9B', 31, '8:00-9:00', 'Monday', NULL),
('31-SCI9B', 'SCI 9B', 31, '8:00-9:00', 'Tuesday', NULL),
('31-SCI9B', 'SCI 9B', 31, '8:00-9:00', 'Wednesday', NULL),
('31-SCI9B', 'SCI 9B', 31, '8:00-9:00', 'Thursday', NULL),
('31-AP9', 'AP 9', 31, '8:00-9:00', 'Friday', NULL),
('31-MATH9B', 'MATH 9B', 31, '9:20-10:20', 'Monday', NULL),
('31-MATH9B', 'MATH 9B', 31, '9:20-10:20', 'Tuesday', NULL),
('31-MATH9B', 'MATH 9B', 31, '9:20-10:20', 'Wednesday', NULL),
('31-MATH9B', 'MATH 9B', 31, '9:20-10:20', 'Thursday', NULL),
('31-ESP9', 'ESP 9', 31, '9:20-10:20', 'Friday', NULL),
('31-FOLA9', 'FOLA 9', 31, '10:20-11:20', 'Monday', NULL),
('31-FOLA9', 'FOLA 9', 31, '10:20-11:20', 'Tuesday', NULL),
('31-FOLA9', 'FOLA 9', 31, '10:20-11:20', 'Wednesday', NULL),
('31-ESP9', 'ESP 9', 31, '10:20-11:20', 'Thursday', NULL),
('31-FOLA9', 'FOLA 9', 31, '10:20-11:20', 'Friday', NULL),
('31-MATH9A', 'MATH 9A', 31, '11:20-12:20', 'Monday', NULL),
('31-MATH9A', 'MATH 9A', 31, '11:20-12:20', 'Tuesday', NULL),
('31-MATH9A', 'MATH 9A', 31, '11:20-12:20', 'Wednesday', NULL),
('31-MATH9A', 'MATH 9A', 31, '11:20-12:20', 'Thursday', NULL),
('31-ESP9', 'ESP 9', 31, '11:20-12:20', 'Friday', NULL),
('31-ENG9', 'ENG 9', 31, '1:00-2:00', 'Monday', NULL),
('31-ENG9', 'ENG 9', 31, '1:00-2:00', 'Tuesday', NULL),
('31-ENG9', 'ENG 9', 31, '1:00-2:00', 'Wednesday', NULL),
('31-ENG9', 'ENG 9', 31, '1:00-2:00', 'Friday', NULL),
('31-MAPEH9', 'MAPEH 9', 31, '1:00-2:00', 'Thursday', NULL),
('31-FIL9', 'FIL 9', 31, '2:00-3:00', 'Tuesday', NULL),
('31-FIL9', 'FIL 9', 31, '2:00-3:00', 'Wednesday', NULL),
('31-FIL9', 'FIL 9', 31, '2:00-3:00', 'Thursday', NULL),
('31-MAPEH9', 'MAPEH 9', 31, '2:00-3:00', 'Monday', NULL),
('31-MAPEH9', 'MAPEH 9', 31, '2:00-3:00', 'Friday', NULL),
('31-MAPEH9', 'MAPEH 9', 31, '3:00-4:00', 'Tuesday', NULL),
('31-FIL9', 'FIL 9', 31, '3:00-4:00', 'Friday', NULL),
('32-AP9', 'AP 9', 32, '6:00-7:00', 'Monday', NULL),
('32-AP9', 'AP 9', 32, '6:00-7:00', 'Tuesday', NULL),
('32-AP9', 'AP 9', 32, '6:00-7:00', 'Wednesday', NULL),
('32-ESP9', 'ESP 9', 32, '6:00-7:00', 'Thursday', NULL),
('32-ESP9', 'ESP 9', 32, '6:00-7:00', 'Friday', NULL),
('32-SCI9A', 'SCI 9A', 32, '7:00-8:00', 'Monday', NULL),
('32-SCI9A', 'SCI 9A', 32, '7:00-8:00', 'Tuesday', NULL),
('32-SCI9A', 'SCI 9A', 32, '7:00-8:00', 'Wednesday', NULL),
('32-ESP9', 'ESP 9', 32, '7:00-8:00', 'Thursday', NULL),
('32-SCI9A', 'SCI 9A', 32, '7:00-8:00', 'Friday', NULL),
('32-TLE9', 'TLE 9', 32, '8:00-9:00', 'Monday', NULL),
('32-TLE9', 'TLE 9', 32, '8:00-9:00', 'Tuesday', NULL),
('32-TLE9', 'TLE 9', 32, '8:00-9:00', 'Wednesday', NULL),
('32-TLE9', 'TLE 9', 32, '8:00-9:00', 'Thursday', NULL),
('32-MATH9B', 'MATH 9B', 32, '8:00-9:00', 'Friday', NULL),
('32-SCI9B', 'SCI 9B', 32, '9:20-10:20', 'Monday', NULL),
('32-SCI9B', 'SCI 9B', 32, '9:20-10:20', 'Tuesday', NULL),
('32-SCI9B', 'SCI 9B', 32, '9:20-10:20', 'Wednesday', NULL),
('32-SCI9B', 'SCI 9B', 32, '9:20-10:20', 'Thursday', NULL),
('32-MATH9B', 'MATH 9B', 32, '10:20-11:20', 'Monday', NULL),
('32-MATH9B', 'MATH 9B', 32, '10:20-11:20', 'Wednesday', NULL),
('32-MATH9B', 'MATH 9B', 32, '10:20-11:20', 'Thursday', NULL),
('32-FIL9', 'FIL 9', 32, '10:20-11:20', 'Tuesday', NULL),
('32-FIL9', 'FIL 9', 32, '10:20-11:20', 'Friday', NULL),
('32-FOLA9', 'FOLA 9', 32, '11:20-12:20', 'Monday', NULL),
('32-FOLA9', 'FOLA 9', 32, '11:20-12:20', 'Tuesday', NULL),
('32-FIL9', 'FIL 9', 32, '11:20-12:20', 'Wednesday', NULL),
('32-FOLA9', 'FOLA 9', 32, '11:20-12:20', 'Thursday', NULL),
('32-FOLA9', 'FOLA 9', 32, '11:20-12:20', 'Friday', NULL),
('32-MAPEH9', 'MAPEH 9', 32, '1:00-2:00', 'Monday', NULL),
('32-MAPEH9', 'MAPEH 9', 32, '1:00-2:00', 'Tuesday', NULL),
('32-MAPEH9', 'MAPEH 9', 32, '1:00-2:00', 'Friday', NULL),
('32-MATH9A', 'MATH 9A', 32, '1:00-2:00', 'Wednesday', NULL),
('32-ENG9', 'ENG 9', 32, '1:00-2:00', 'Thursday', NULL),
('32-MATH9A', 'MATH 9A', 32, '2:00-3:00', 'Tuesday', NULL),
('32-MATH9A', 'MATH 9A', 32, '2:00-3:00', 'Thursday', NULL),
('32-MATH9A', 'MATH 9A', 32, '2:00-3:00', 'Friday', NULL),
('32-FIL9', 'FIL 9', 32, '2:00-3:00', 'Monday', NULL),
('32-MAPEH9', 'MAPEH 9', 32, '2:00-3:00', 'Wednesday', NULL),
('32-ENG9', 'ENG 9', 32, '3:00-4:00', 'Monday', NULL),
('32-ENG9', 'ENG 9', 32, '3:00-4:00', 'Wednesday', NULL),
('32-ENG9', 'ENG 9', 32, '3:00-4:00', 'Friday', NULL),
('33-ENG10', 'ENG 10', 33, '6:00-7:00', 'Monday', NULL),
('33-ENG10', 'ENG 10', 33, '6:00-7:00', 'Tuesday', NULL),
('33-AP10', 'AP 10', 33, '6:00-7:00', 'Wednesday', NULL),
('33-ENG10', 'ENG 10', 33, '6:00-7:00', 'Thursday', NULL),
('33-ENG10', 'ENG 10', 33, '6:00-7:00', 'Friday', NULL),
('33-FOLA10', 'FOLA 10', 33, '7:00-8:00', 'Monday', NULL),
('33-AP10', 'AP 10', 33, '7:00-8:00', 'Tuesday', NULL),
('33-FOLA10', 'FOLA 10', 33, '7:00-8:00', 'Wednesday', NULL),
('33-FOLA10', 'FOLA 10', 33, '7:00-8:00', 'Thursday', NULL),
('33-FOLA10', 'FOLA 10', 33, '7:00-8:00', 'Friday', NULL),
('33-MATH10A', 'MATH 10A', 33, '8:00-9:00', 'Monday', NULL),
('33-MATH10A', 'MATH 10A', 33, '8:00-9:00', 'Tuesday', NULL),
('33-MATH10A', 'MATH 10A', 33, '8:00-9:00', 'Wednesday', NULL),
('33-ESP10', 'ESP 10', 33, '8:00-9:00', 'Thursday', NULL),
('33-MATH10A', 'MATH 10A', 33, '8:00-9:00', 'Friday', NULL),
('33-AP10', 'AP 10', 33, '9:20-10:20', 'Monday', NULL),
('33-SCI10A', 'SCI 10A', 33, '9:20-10:20', 'Tuesday', NULL),
('33-SCI10A', 'SCI 10A', 33, '9:20-10:20', 'Wednesday', NULL),
('33-SCI10A', 'SCI 10A', 33, '9:20-10:20', 'Thursday', NULL),
('33-SCI10A', 'SCI 10A', 33, '9:20-10:20', 'Friday', NULL),
('33-TLE10', 'TLE 10', 33, '10:20-11:20', 'Monday', NULL),
('33-TLE10', 'TLE 10', 33, '10:20-11:20', 'Tuesday', NULL),
('33-ESP10', 'ESP 10', 33, '10:20-11:20', 'Wednesday', NULL),
('33-TLE10', 'TLE 10', 33, '10:20-11:20', 'Thursday', NULL),
('33-TLE10', 'TLE 10', 33, '10:20-11:20', 'Friday', NULL),
('33-FIL10', 'FIL 10', 33, '11:20-12:20', 'Monday', NULL),
('33-FIL10', 'FIL 10', 33, '11:20-12:20', 'Thursday', NULL),
('33-FIL10', 'FIL 10', 33, '11:20-12:20', 'Friday', NULL),
('33-ESP10', 'ESP 10', 33, '11:20-12:20', 'Tuesday', NULL),
('33-MATH10B', 'MATH 10B', 33, '11:20-12:20', 'Wednesday', NULL),
('33-MATH10B', 'MATH 10B', 33, '1:00-2:00', 'Monday', NULL),
('33-MATH10B', 'MATH 10B', 33, '1:00-2:00', 'Thursday', NULL),
('33-MATH10B', 'MATH 10B', 33, '1:00-2:00', 'Friday', NULL),
('33-HOMEROOM10', 'HOMEROOM 10', 33, '1:00-2:00', 'Wednesday', NULL),
('33-FIL10', 'FIL 10', 33, '1:00-2:00', 'Tuesday', NULL),
('33-SCI10B', 'SCI 10B', 33, '2:00-3:00', 'Monday', NULL),
('33-SCI10B', 'SCI 10B', 33, '2:00-3:00', 'Tuesday', NULL),
('33-SCI10B', 'SCI 10B', 33, '2:00-3:00', 'Thursday', NULL),
('33-MAPEH10', 'MAPEH 10', 33, '2:00-3:00', 'Wednesday', NULL),
('33-SCI10B', 'SCI 10B', 33, '2:00-3:00', 'Friday', NULL),
('33-MAPEH10', 'MAPEH 10', 33, '3:00-4:00', 'Monday', NULL),
('33-MAPEH10', 'MAPEH 10', 33, '3:00-4:00', 'Tuesday', NULL);

--
-- Triggers `sched_backup`
--
DELIMITER $$
CREATE TRIGGER `Sched backup constraints` BEFORE INSERT ON `sched_backup` FOR EACH ROW IF
	(SELECT COUNT(SubjectID) FROM subject WHERE SubjectID = new.SubjectID) >= (SELECT Frequency FROM subjectcode WHERE SubjectCode = new.SubjectCode) 
    
THEN
	SIGNAL SQLSTATE '02000' SET MESSAGE_TEXT = 'Warning: Exceeds occurence!';
END IF
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `section`
--

CREATE TABLE `section` (
  `SectionName` varchar(255) NOT NULL,
  `GradeLevel` int(2) NOT NULL,
  `RoomNum` int(10) DEFAULT NULL,
  `SectionNum` int(11) NOT NULL,
  `Population` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `section`
--

INSERT INTO `section` (`SectionName`, `GradeLevel`, `RoomNum`, `SectionNum`, `Population`) VALUES
('Newton', 7, 203, 26, 0),
('Euclid', 7, 204, 27, 0),
('Tesla', 7, 205, 28, 0),
('Air', 8, 201, 29, 0),
('Water', 8, 202, 30, 0),
('Sun', 9, 303, 31, 0),
('Moon', 9, 304, 32, 0),
('Earth', 10, 305, 33, 0),
('Mars', 10, 200, 34, 0);

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `LRNNum` bigint(11) NOT NULL,
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
  `URL_Picture` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`LRNNum`, `LastName`, `FirstName`, `MiddleName`, `Birthday`, `Age`, `StreetAdd1`, `StreetAdd2`, `City`, `Province`, `Country`, `Gender`, `GradeLevel`, `Type`, `URL_Picture`) VALUES
(123456789121, 'Gabon', 'Jose', 'Manuel', '1997-03-28', 0, '#23 E. Caruncho Ave', NULL, 'Pasig', 'Metro Manila', 'Philippines', 'Male', 7, 'Old', '46280_541687292517090_621937474_n.jpg'),
(123456789123, 'Gabon', 'Jose Mari', 'Manuel', '1997-03-28', 22, '#242 Marigold St', 'Pinagbuhatan', 'Pasig', 'Metro Manila', 'Philippines', 'Male', 7, 'Old', '46280_541687292517090_621937474_n.jpg'),
(567890321425, 'Gabon', 'Carlos Miguel', 'Manuel', '2010-01-22', 9, '#4803 V. Baltazar', NULL, 'Pasig', 'Metro Manila', 'Philippines', 'Male', 7, 'Old', '46280_541687292517090_621937474_n.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `subject`
--

CREATE TABLE `subject` (
  `SubjectID` varchar(255) NOT NULL,
  `SubjectCode` varchar(255) NOT NULL,
  `SectionNum` int(11) NOT NULL,
  `EmployeeNum` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `subject`
--

INSERT INTO `subject` (`SubjectID`, `SubjectCode`, `SectionNum`, `EmployeeNum`) VALUES
('26-AP7', 'AP 7', 26, NULL),
('26-ENG7', 'ENG 7 ', 26, NULL),
('26-ESP7', 'ESP 7', 26, NULL),
('26-FIL7', 'FIL 7', 26, NULL),
('26-MAPEH7', 'MAPEH 7', 26, NULL),
('26-MATH7A', 'MATH 7A', 26, NULL),
('26-MATH7B', 'MATH 7B', 26, NULL),
('26-RESEARCH7', 'RESEARCH 7', 26, NULL),
('26-SCI7A', 'SCI 7A', 26, NULL),
('26-SCI7B', 'SCI 7B', 26, NULL),
('26-TLE7', 'TLE 7', 26, NULL),
('27-AP7', 'AP 7', 27, NULL),
('27-ENG7', 'ENG 7 ', 27, NULL),
('27-ESP7', 'ESP 7', 27, NULL),
('27-FIL7', 'FIL 7', 27, NULL),
('27-MAPEH7', 'MAPEH 7', 27, NULL),
('27-MATH7A', 'MATH 7A', 27, NULL),
('27-MATH7B', 'MATH 7B', 27, NULL),
('27-RESEARCH7', 'RESEARCH 7', 27, NULL),
('27-SCI7A', 'SCI 7A', 27, NULL),
('27-SCI7B', 'SCI 7B', 27, NULL),
('27-TLE7', 'TLE 7', 27, NULL),
('28-AP7', 'AP 7', 28, NULL),
('28-ENG7', 'ENG 7 ', 28, NULL),
('28-ESP7', 'ESP 7', 28, NULL),
('28-FIL7', 'FIL 7', 28, NULL),
('28-MAPEH7', 'MAPEH 7', 28, NULL),
('28-MATH7A', 'MATH 7A', 28, NULL),
('28-MATH7B', 'MATH 7B', 28, NULL),
('28-RESEARCH7', 'RESEARCH 7', 28, NULL),
('28-SCI7A', 'SCI 7A', 28, NULL),
('28-SCI7B', 'SCI 7B', 28, NULL),
('28-TLE7', 'TLE 7', 28, NULL),
('29-AP8', 'AP 8', 29, NULL),
('29-ENG8', 'ENG 8', 29, NULL),
('29-ESP8', 'ESP 8', 29, NULL),
('29-FIL8', 'FIL 8', 29, NULL),
('29-MAPEH8', 'MAPEH 8', 29, NULL),
('29-MATH8A', 'MATH 8A', 29, NULL),
('29-MATH8B', 'MATH 8B', 29, NULL),
('29-RESEARCH8', 'RESEARCH 8', 29, NULL),
('29-SCI8A', 'SCI 8A', 29, NULL),
('29-SCI8B', 'SCI 8B', 29, NULL),
('29-TLE8', 'TLE 8', 29, NULL),
('30-AP8', 'AP 8', 30, NULL),
('30-ENG8', 'ENG 8', 30, NULL),
('30-ESP8', 'ESP 8', 30, NULL),
('30-FIL8', 'FIL 8', 30, NULL),
('30-MAPEH8', 'MAPEH 8', 30, NULL),
('30-MATH8A', 'MATH 8A', 30, NULL),
('30-MATH8B', 'MATH 8B', 30, NULL),
('30-RESEARCH8', 'RESEARCH 8', 30, NULL),
('30-SCI8A', 'SCI 8A', 30, NULL),
('30-SCI8B', 'SCI 8B', 30, NULL),
('30-TLE8', 'TLE 8', 30, NULL),
('31-AP9', 'AP 9', 31, NULL),
('31-ENG9', 'ENG 9', 31, NULL),
('31-ESP9', 'ESP 9', 31, NULL),
('31-FIL9', 'FIL 9', 31, NULL),
('31-FOLA9', 'FOLA 9', 31, NULL),
('31-MAPEH9', 'MAPEH 9', 31, NULL),
('31-MATH9A', 'MATH 9A', 31, NULL),
('31-MATH9B', 'MATH 9B', 31, NULL),
('31-SCI9A', 'SCI 9A', 31, NULL),
('31-SCI9B', 'SCI 9B', 31, NULL),
('31-TLE9', 'TLE 9', 31, NULL),
('32-AP9', 'AP 9', 32, NULL),
('32-ENG9', 'ENG 9', 32, NULL),
('32-ESP9', 'ESP 9', 32, NULL),
('32-FIL9', 'FIL 9', 32, NULL),
('32-FOLA9', 'FOLA 9', 32, NULL),
('32-MAPEH9', 'MAPEH 9', 32, NULL),
('32-MATH9A', 'MATH 9A', 32, NULL),
('32-MATH9B', 'MATH 9B', 32, NULL),
('32-SCI9A', 'SCI 9A', 32, NULL),
('32-SCI9B', 'SCI 9B', 32, NULL),
('32-TLE9', 'TLE 9', 32, NULL),
('33-AP10', 'AP 10', 33, NULL),
('33-ENG10', 'ENG 10', 33, NULL),
('33-ESP10', 'ESP 10', 33, NULL),
('33-FIL10', 'FIL 10', 33, NULL),
('33-FOLA10', 'FOLA 10', 33, NULL),
('33-HOMEROOM10', 'HOMEROOM 10', 33, NULL),
('33-MAPEH10', 'MAPEH 10', 33, NULL),
('33-MATH10A', 'MATH 10A', 33, NULL),
('33-MATH10B', 'MATH 10B', 33, NULL),
('33-SCI10A', 'SCI 10A', 33, NULL),
('33-SCI10B', 'SCI 10B', 33, NULL),
('33-TLE10', 'TLE 10', 33, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `subjectcode`
--

CREATE TABLE `subjectcode` (
  `SubjectCode` varchar(255) NOT NULL,
  `SubjectDescription` text,
  `GradeLevel` int(2) NOT NULL,
  `Frequency` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `subjectcode`
--

INSERT INTO `subjectcode` (`SubjectCode`, `SubjectDescription`, `GradeLevel`, `Frequency`) VALUES
('AP 10', NULL, 10, 3),
('AP 7', NULL, 7, 3),
('AP 8', NULL, 8, 3),
('AP 9', NULL, 9, 3),
('ENG 10', NULL, 10, 4),
('ENG 7 ', NULL, 7, 4),
('ENG 8', NULL, 8, 4),
('ENG 9', NULL, 9, 4),
('ESP 10', NULL, 10, 3),
('ESP 7', NULL, 7, 2),
('ESP 8', NULL, 8, 3),
('ESP 9', NULL, 9, 3),
('FIL 10', NULL, 10, 4),
('FIL 7', NULL, 7, 4),
('FIL 8', NULL, 8, 4),
('FIL 9', NULL, 9, 4),
('FOLA 10', NULL, 10, 4),
('FOLA 9', NULL, 9, 4),
('HOMEROOM 10', NULL, 10, 1),
('MAPEH 10', NULL, 10, 3),
('MAPEH 7', NULL, 7, 4),
('MAPEH 8', NULL, 8, 4),
('MAPEH 9', NULL, 9, 4),
('MATH 10A', NULL, 10, 4),
('MATH 10B', NULL, 10, 4),
('MATH 7A', NULL, 7, 4),
('MATH 7B', NULL, 7, 4),
('MATH 8A', NULL, 8, 4),
('MATH 8B', NULL, 8, 4),
('MATH 9A', NULL, 9, 4),
('MATH 9B', NULL, 9, 4),
('RESEARCH 7', NULL, 7, 4),
('RESEARCH 8', NULL, 8, 4),
('SCI 10A', NULL, 10, 4),
('SCI 10B', NULL, 10, 4),
('SCI 7A', NULL, 7, 4),
('SCI 7B', NULL, 7, 4),
('SCI 8A', NULL, 8, 4),
('SCI 8B', NULL, 8, 4),
('SCI 9A', NULL, 9, 4),
('SCI 9B', NULL, 9, 4),
('TLE 10', NULL, 10, 4),
('TLE 7', NULL, 7, 4),
('TLE 8', NULL, 8, 4),
('TLE 9', NULL, 9, 4);

-- --------------------------------------------------------

--
-- Table structure for table `teacher`
--

CREATE TABLE `teacher` (
  `EmployeeNum` int(11) DEFAULT NULL,
  `Name` varchar(255) NOT NULL,
  `SectionNum` int(11) DEFAULT NULL,
  `Schedule` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `teacher`
--

INSERT INTO `teacher` (`EmployeeNum`, `Name`, `SectionNum`, `Schedule`) VALUES
(3, 'Gabon, Carlos Miguel M.', 27, 0),
(4, 'Oprenario, Leslie Alexis M.', NULL, 0),
(5, 'Gabon, Jose M.', 26, 0);

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
