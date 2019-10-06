-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 06, 2019 at 02:40 PM
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
  `RoomName` varchar(255) NOT NULL,
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
(204, 'Tesla', 2, 40, 'Classroom');

--
-- Triggers `room`
--
DELIMITER $$
CREATE TRIGGER `AFTER UPDATE room` AFTER UPDATE ON `room` FOR EACH ROW UPDATE section SET RoomNum = NULL WHERE RoomNum IN (SELECT RoomNum FROM room WHERE Type <> "Classroom")
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
('Euclid', 7, 204, 27, 0);

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `StudentNum` int(11) NOT NULL,
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
  `GradeLevel` int(2) NOT NULL,
  `Type` varchar(10) NOT NULL,
  `URL_Picture` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `subject`
--

CREATE TABLE `subject` (
  `SubjectCode` varchar(255) NOT NULL,
  `SectionNum` int(11) NOT NULL,
  `SubjectTime` varchar(13) NOT NULL,
  `SubjectDay` varchar(10) NOT NULL,
  `EmployeeNum` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `subject`
--

INSERT INTO `subject` (`SubjectCode`, `SectionNum`, `SubjectTime`, `SubjectDay`, `EmployeeNum`) VALUES
('SCI 7A', 26, '6:00-7:00', 'Monday', NULL),
('SCI 7A', 26, '6:00-7:00', 'Wednesday', NULL),
('SCI 7A', 26, '6:00-7:00', 'Friday', NULL),
('ENG 7 ', 26, '7:00-8:00', 'Tuesday', NULL),
('ENG 7 ', 26, '7:00-8:00', 'Wednesday', NULL),
('ENG 7 ', 26, '7:00-8:00', 'Friday', NULL),
('AP 7', 26, '7:00-8:00', 'Thursday', NULL),
('RESEARCH 7', 26, '7:00-8:00', 'Monday', NULL),
('MATH 7A', 26, '8:00-9:00', 'Monday', NULL),
('MATH 7A', 26, '8:00-9:00', 'Friday', NULL),
('RESEARCH 7', 26, '8:00-9:00', 'Tuesday', NULL),
('RESEARCH 7', 26, '8:00-9:00', 'Wednesday', NULL),
('RESEARCH 7', 26, '8:00-9:00', 'Thursday', NULL),
('MATH 7B', 26, '9:20-10:20', 'Monday', NULL),
('MATH 7B', 26, '9:20-10:20', 'Tuesday', NULL),
('MATH 7B', 26, '9:20-10:20', 'Wednesday', NULL),
('MATH 7B', 26, '9:20-10:20', 'Thursday', NULL),
('AP 7', 26, '9:20-10:20', 'Friday', NULL),
('ENG 7 ', 26, '10:20-11:20', 'Monday', NULL),
('ESP 7', 26, '10:20-11:20', 'Tuesday', NULL),
('MATH 7A', 26, '10:20-11:20', 'Wednesday', NULL),
('AP 7', 26, '10:20-11:20', 'Thursday', NULL),
('FIL 7', 26, '10:20-11:20', 'Friday', NULL),
('SCI 7B', 26, '11:20-12:20', 'Monday', NULL),
('SCI 7B', 26, '11:20-12:20', 'Tuesday', NULL),
('SCI 7B', 26, '11:20-12:20', 'Wednesday', NULL),
('SCI 7B', 26, '11:20-12:20', 'Friday', NULL),
('ESP 7', 26, '11:20-12:20', 'Thursday', NULL),
('MAPEH 7', 26, '1:00-2:00', 'Monday', NULL),
('MAPEH 7', 26, '1:00-2:00', 'Tuesday', NULL),
('FIL 7', 26, '1:00-2:00', 'Wednesday', NULL),
('FIL 7', 26, '1:00-2:00', 'Thursday', NULL),
('FIL 7', 26, '1:00-2:00', 'Friday', NULL),
('TLE 7', 26, '2:00-3:00', 'Monday', NULL),
('TLE 7', 26, '2:00-3:00', 'Tuesday', NULL),
('TLE 7', 26, '2:00-3:00', 'Thursday', NULL),
('TLE 7', 26, '2:00-3:00', 'Friday', NULL),
('MAPEH 7', 26, '3:00-4:00', 'Wednesday', NULL),
('MAPEH 7', 26, '3:00-4:00', 'Thursday', NULL),
('RESEARCH 7', 27, '6:00-7:00', 'Monday', NULL),
('RESEARCH 7', 27, '6:00-7:00', 'Wednesday', NULL),
('RESEARCH 7', 27, '6:00-7:00', 'Friday', NULL),
('RESEARCH 7', 27, '6:00-7:00', 'Thursday', NULL),
('MATH 7A', 27, '7:00-8:00', 'Monday', NULL),
('MATH 7A', 27, '7:00-8:00', 'Tuesday', NULL),
('MATH 7A', 27, '7:00-8:00', 'Thursday', NULL),
('MATH 7A', 27, '7:00-8:00', 'Friday', NULL),
('AP 7', 27, '7:00-8:00', 'Wednesday', NULL),
('SCI 7A', 27, '8:00-9:00', 'Monday', NULL),
('SCI 7A', 27, '8:00-9:00', 'Tuesday', NULL),
('SCI 7A', 27, '8:00-9:00', 'Wednesday', NULL),
('SCI 7A', 27, '8:00-9:00', 'Friday', NULL),
('AP 7', 27, '8:00-9:00', 'Thursday', NULL),
('TLE 7', 27, '9:20-10:20', 'Monday', NULL),
('TLE 7', 27, '9:20-10:20', 'Tuesday', NULL),
('TLE 7', 27, '9:20-10:20', 'Friday', NULL),
('ESP 7', 27, '9:20-10:20', 'Wednesday', NULL),
('ESP 7', 27, '9:20-10:20', 'Thursday', NULL),
('MATH 7B', 27, '10:20-11:20', 'Monday', NULL),
('MATH 7B', 27, '10:20-11:20', 'Tuesday', NULL),
('MATH 7B', 27, '10:20-11:20', 'Thursday', NULL),
('MATH 7B', 27, '10:20-11:20', 'Friday', NULL),
('TLE 7', 27, '10:20-11:20', 'Wednesday', NULL),
('ENG 7 ', 27, '11:20-12:20', 'Monday', NULL),
('ENG 7 ', 27, '11:20-12:20', 'Tuesday', NULL),
('ENG 7 ', 27, '11:20-12:20', 'Thursday', NULL),
('ENG 7 ', 27, '11:20-12:20', 'Friday', NULL),
('FIL 7', 27, '11:20-12:20', 'Wednesday', NULL),
('SCI 7B', 27, '1:00-2:00', 'Monday', NULL),
('SCI 7B', 27, '1:00-2:00', 'Tuesday', NULL),
('SCI 7B', 27, '1:00-2:00', 'Wednesday', NULL),
('SCI 7B', 27, '1:00-2:00', 'Thursday', NULL),
('MAPEH 7', 27, '1:00-2:00', 'Friday', NULL),
('MAPEH 7', 27, '2:00-3:00', 'Monday', NULL),
('MAPEH 7', 27, '2:00-3:00', 'Tuesday', NULL),
('MAPEH 7', 27, '2:00-3:00', 'Thursday', NULL),
('FIL 7', 27, '3:00-4:00', 'Monday', NULL),
('FIL 7', 27, '3:00-4:00', 'Tuesday', NULL),
('FIL 7', 27, '3:00-4:00', 'Thursday', NULL),
('AP 7', 27, '6:00-7:00', 'Tuesday', NULL),
('MATH 7A', 26, '6:00-7:00', 'Thursday', NULL),
('SCI 7A', 26, '6:00-7:00', 'Tuesday', NULL);

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
('AP 7', NULL, 7, 3),
('ENG 7 ', NULL, 7, 4),
('ESP 7', NULL, 7, 2),
('FIL 7', NULL, 7, 4),
('MAPEH 7', NULL, 7, 4),
('MATH 7A', NULL, 7, 4),
('MATH 7B', NULL, 7, 4),
('RESEARCH 7', NULL, 7, 4),
('SCI 7A', NULL, 7, 4),
('SCI 7B', NULL, 7, 4),
('TLE 7', NULL, 7, 4);

-- --------------------------------------------------------

--
-- Table structure for table `subject_backup`
--

CREATE TABLE `subject_backup` (
  `SubjectNum` int(11) NOT NULL,
  `SubjectCode` varchar(255) NOT NULL,
  `SectionNum` int(11) NOT NULL,
  `SubjectTime` varchar(13) NOT NULL,
  `SubjectDay` varchar(10) NOT NULL,
  `EmployeeNum` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `subject_backup`
--

INSERT INTO `subject_backup` (`SubjectNum`, `SubjectCode`, `SectionNum`, `SubjectTime`, `SubjectDay`, `EmployeeNum`) VALUES
(42, 'RESEARCH 7', 27, '6:00-7:00', 'Monday', NULL),
(43, 'RESEARCH 7', 27, '6:00-7:00', 'Wednesday', NULL),
(44, 'RESEARCH 7', 27, '6:00-7:00', 'Friday', NULL),
(45, 'RESEARCH 7', 27, '6:00-7:00', 'Thursday', NULL),
(47, 'MATH 7A', 27, '7:00-8:00', 'Monday', NULL),
(48, 'MATH 7A', 27, '7:00-8:00', 'Tuesday', NULL),
(49, 'MATH 7A', 27, '7:00-8:00', 'Thursday', NULL),
(50, 'MATH 7A', 27, '7:00-8:00', 'Friday', NULL),
(51, 'AP 7', 27, '7:00-8:00', 'Wednesday', NULL),
(52, 'SCI 7A', 27, '8:00-9:00', 'Monday', NULL),
(53, 'SCI 7A', 27, '8:00-9:00', 'Tuesday', NULL),
(54, 'SCI 7A', 27, '8:00-9:00', 'Wednesday', NULL),
(55, 'SCI 7A', 27, '8:00-9:00', 'Friday', NULL),
(56, 'AP 7', 27, '8:00-9:00', 'Thursday', NULL),
(57, 'TLE 7', 27, '9:20-10:20', 'Monday', NULL),
(58, 'TLE 7', 27, '9:20-10:20', 'Tuesday', NULL),
(59, 'TLE 7', 27, '9:20-10:20', 'Friday', NULL),
(60, 'ESP 7', 27, '9:20-10:20', 'Wednesday', NULL),
(61, 'ESP 7', 27, '9:20-10:20', 'Thursday', NULL),
(62, 'MATH 7B', 27, '10:20-11:20', 'Monday', NULL),
(63, 'MATH 7B', 27, '10:20-11:20', 'Tuesday', NULL),
(64, 'MATH 7B', 27, '10:20-11:20', 'Thursday', NULL),
(65, 'MATH 7B', 27, '10:20-11:20', 'Friday', NULL),
(66, 'TLE 7', 27, '10:20-11:20', 'Wednesday', NULL),
(67, 'ENG 7 ', 27, '11:20-12:20', 'Monday', NULL),
(68, 'ENG 7 ', 27, '11:20-12:20', 'Tuesday', NULL),
(69, 'ENG 7 ', 27, '11:20-12:20', 'Thursday', NULL),
(70, 'ENG 7 ', 27, '11:20-12:20', 'Friday', NULL),
(71, 'FIL 7', 27, '11:20-12:20', 'Wednesday', NULL),
(72, 'SCI 7B', 27, '1:00-2:00', 'Monday', NULL),
(73, 'SCI 7B', 27, '1:00-2:00', 'Tuesday', NULL),
(74, 'SCI 7B', 27, '1:00-2:00', 'Wednesday', NULL),
(75, 'SCI 7B', 27, '1:00-2:00', 'Thursday', NULL),
(76, 'MAPEH 7', 27, '1:00-2:00', 'Friday', NULL),
(77, 'MAPEH 7', 27, '2:00-3:00', 'Monday', NULL),
(78, 'MAPEH 7', 27, '2:00-3:00', 'Tuesday', NULL),
(79, 'MAPEH 7', 27, '2:00-3:00', 'Thursday', NULL),
(80, 'FIL 7', 27, '3:00-4:00', 'Monday', NULL),
(81, 'FIL 7', 27, '3:00-4:00', 'Tuesday', NULL),
(82, 'FIL 7', 27, '3:00-4:00', 'Thursday', NULL),
(87, 'AP 7', 27, '6:00-7:00', 'Tuesday', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `subject_backup2`
--

CREATE TABLE `subject_backup2` (
  `SubjectCode` varchar(255) NOT NULL,
  `SectionNum` int(11) NOT NULL,
  `SubjectTime` varchar(13) NOT NULL,
  `SubjectDay` varchar(10) NOT NULL,
  `EmployeeNum` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `subject_backup2`
--

INSERT INTO `subject_backup2` (`SubjectCode`, `SectionNum`, `SubjectTime`, `SubjectDay`, `EmployeeNum`) VALUES
('SCI 7A', 26, '6:00-7:00', 'Monday', NULL),
('SCI 7A', 26, '6:00-7:00', 'Wednesday', NULL),
('SCI 7A', 26, '6:00-7:00', 'Friday', NULL),
('ENG 7 ', 26, '7:00-8:00', 'Tuesday', NULL),
('ENG 7 ', 26, '7:00-8:00', 'Wednesday', NULL),
('ENG 7 ', 26, '7:00-8:00', 'Friday', NULL),
('AP 7', 26, '7:00-8:00', 'Thursday', NULL),
('RESEARCH 7', 26, '7:00-8:00', 'Monday', NULL),
('MATH 7A', 26, '8:00-9:00', 'Monday', NULL),
('MATH 7A', 26, '8:00-9:00', 'Friday', NULL),
('RESEARCH 7', 26, '8:00-9:00', 'Tuesday', NULL),
('RESEARCH 7', 26, '8:00-9:00', 'Wednesday', NULL),
('RESEARCH 7', 26, '8:00-9:00', 'Thursday', NULL),
('MATH 7B', 26, '9:20-10:20', 'Monday', NULL),
('MATH 7B', 26, '9:20-10:20', 'Tuesday', NULL),
('MATH 7B', 26, '9:20-10:20', 'Wednesday', NULL),
('MATH 7B', 26, '9:20-10:20', 'Thursday', NULL),
('AP 7', 26, '9:20-10:20', 'Friday', NULL),
('ENG 7 ', 26, '10:20-11:20', 'Monday', NULL),
('ESP 7', 26, '10:20-11:20', 'Tuesday', NULL),
('MATH 7A', 26, '10:20-11:20', 'Wednesday', NULL),
('AP 7', 26, '10:20-11:20', 'Thursday', NULL),
('FIL 7', 26, '10:20-11:20', 'Friday', NULL),
('SCI 7B', 26, '11:20-12:20', 'Monday', NULL),
('SCI 7B', 26, '11:20-12:20', 'Tuesday', NULL),
('SCI 7B', 26, '11:20-12:20', 'Wednesday', NULL),
('SCI 7B', 26, '11:20-12:20', 'Friday', NULL),
('ESP 7', 26, '11:20-12:20', 'Thursday', NULL),
('MAPEH 7', 26, '1:00-2:00', 'Monday', NULL),
('MAPEH 7', 26, '1:00-2:00', 'Tuesday', NULL),
('FIL 7', 26, '1:00-2:00', 'Wednesday', NULL),
('FIL 7', 26, '1:00-2:00', 'Thursday', NULL),
('FIL 7', 26, '1:00-2:00', 'Friday', NULL),
('TLE 7', 26, '2:00-3:00', 'Monday', NULL),
('TLE 7', 26, '2:00-3:00', 'Tuesday', NULL),
('TLE 7', 26, '2:00-3:00', 'Thursday', NULL),
('TLE 7', 26, '2:00-3:00', 'Friday', NULL),
('MAPEH 7', 26, '3:00-4:00', 'Wednesday', NULL),
('MAPEH 7', 26, '3:00-4:00', 'Thursday', NULL),
('RESEARCH 7', 27, '6:00-7:00', 'Monday', NULL),
('RESEARCH 7', 27, '6:00-7:00', 'Wednesday', NULL),
('RESEARCH 7', 27, '6:00-7:00', 'Friday', NULL),
('RESEARCH 7', 27, '6:00-7:00', 'Thursday', NULL),
('MATH 7A', 27, '7:00-8:00', 'Monday', NULL),
('MATH 7A', 27, '7:00-8:00', 'Tuesday', NULL),
('MATH 7A', 27, '7:00-8:00', 'Thursday', NULL),
('MATH 7A', 27, '7:00-8:00', 'Friday', NULL),
('AP 7', 27, '7:00-8:00', 'Wednesday', NULL),
('SCI 7A', 27, '8:00-9:00', 'Monday', NULL),
('SCI 7A', 27, '8:00-9:00', 'Tuesday', NULL),
('SCI 7A', 27, '8:00-9:00', 'Wednesday', NULL),
('SCI 7A', 27, '8:00-9:00', 'Friday', NULL),
('AP 7', 27, '8:00-9:00', 'Thursday', NULL),
('TLE 7', 27, '9:20-10:20', 'Monday', NULL),
('TLE 7', 27, '9:20-10:20', 'Tuesday', NULL),
('TLE 7', 27, '9:20-10:20', 'Friday', NULL),
('ESP 7', 27, '9:20-10:20', 'Wednesday', NULL),
('ESP 7', 27, '9:20-10:20', 'Thursday', NULL),
('MATH 7B', 27, '10:20-11:20', 'Monday', NULL),
('MATH 7B', 27, '10:20-11:20', 'Tuesday', NULL),
('MATH 7B', 27, '10:20-11:20', 'Thursday', NULL),
('MATH 7B', 27, '10:20-11:20', 'Friday', NULL),
('TLE 7', 27, '10:20-11:20', 'Wednesday', NULL),
('ENG 7 ', 27, '11:20-12:20', 'Monday', NULL),
('ENG 7 ', 27, '11:20-12:20', 'Tuesday', NULL),
('ENG 7 ', 27, '11:20-12:20', 'Thursday', NULL),
('ENG 7 ', 27, '11:20-12:20', 'Friday', NULL),
('FIL 7', 27, '11:20-12:20', 'Wednesday', NULL),
('SCI 7B', 27, '1:00-2:00', 'Monday', NULL),
('SCI 7B', 27, '1:00-2:00', 'Tuesday', NULL),
('SCI 7B', 27, '1:00-2:00', 'Wednesday', NULL),
('SCI 7B', 27, '1:00-2:00', 'Thursday', NULL),
('MAPEH 7', 27, '1:00-2:00', 'Friday', NULL),
('MAPEH 7', 27, '2:00-3:00', 'Monday', NULL),
('MAPEH 7', 27, '2:00-3:00', 'Tuesday', NULL),
('MAPEH 7', 27, '2:00-3:00', 'Thursday', NULL),
('FIL 7', 27, '3:00-4:00', 'Monday', NULL),
('FIL 7', 27, '3:00-4:00', 'Tuesday', NULL),
('FIL 7', 27, '3:00-4:00', 'Thursday', NULL),
('AP 7', 27, '6:00-7:00', 'Tuesday', NULL),
('MATH 7A', 26, '6:00-7:00', 'Thursday', NULL),
('SCI 7A', 26, '6:00-7:00', 'Tuesday', NULL);

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
  ADD PRIMARY KEY (`StudentNum`);

--
-- Indexes for table `subjectcode`
--
ALTER TABLE `subjectcode`
  ADD PRIMARY KEY (`SubjectCode`);

--
-- Indexes for table `subject_backup`
--
ALTER TABLE `subject_backup`
  ADD PRIMARY KEY (`SubjectNum`);

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
  MODIFY `SectionNum` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `StudentNum` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `subject_backup`
--
ALTER TABLE `subject_backup`
  MODIFY `SubjectNum` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=88;

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
