-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 27, 2019 at 11:09 PM
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
(4, 'Oprenario', 'Leslie Alexis', 'Manuel', '1990-03-31', 29, '23 E. Caruncho Ave,', 'Malinao', 'Pasig City', 'Metro Manila', 'Philippines', 'Male', 'Teacher', '../pictures/employee/401251_393070170706909_1000554163_n.jpg');

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
(101, 'Registrar\'s Office', 1, 15, 'Laboratory'),
(102, 'Civil Department', 1, 15, 'Office'),
(103, 'Computer Department', 1, 15, 'Office'),
(104, 'Electrical Department', 1, 15, 'Office'),
(105, 'Electronics Department', 1, 15, 'Office'),
(107, 'Einstein', 1, 40, 'Classroom'),
(108, 'Curie', 1, 40, 'Classroom'),
(109, 'Copenhagen', 1, 40, 'Classroom'),
(110, 'Newton', 1, 40, 'Classroom'),
(111, 'Hawkin', 1, 40, 'Classroom');

--
-- Triggers `room`
--
DELIMITER $$
CREATE TRIGGER `AFTER UPDATE` AFTER UPDATE ON `room` FOR EACH ROW UPDATE section SET RoomNum = NULL WHERE RoomNum IN (SELECT RoomNum FROM room WHERE Type <> "Classroom")
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `section`
--

CREATE TABLE `section` (
  `SectionName` varchar(255) NOT NULL,
  `GradeLevel` varchar(8) NOT NULL,
  `RoomNum` int(10) DEFAULT NULL,
  `SectionNum` int(11) NOT NULL,
  `Population` int(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `section`
--

INSERT INTO `section` (`SectionName`, `GradeLevel`, `RoomNum`, `SectionNum`, `Population`) VALUES
('Marangal', 'Grade 7', 107, 4, 0),
('Matapang', 'Grade 7', 108, 13, 0),
('Malakas', 'Grade 7', 109, 14, NULL);

--
-- Triggers `section`
--
DELIMITER $$
CREATE TRIGGER `AFTER UPDATE section` AFTER UPDATE ON `section` FOR EACH ROW UPDATE teacher, section SET teacher.SectionNum = section.SectionNum WHERE teacher.SectionNum IS NOT NULL
$$
DELIMITER ;

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
  `GradeLevel` varchar(8) NOT NULL,
  `Type` varchar(10) NOT NULL,
  `URL_Picture` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
(3, 'Gabon, Carlos Miguel M.', 4, 0),
(4, 'Oprenario, Leslie Alexis M.', 14, 0);

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
-- Indexes for table `teacher`
--
ALTER TABLE `teacher`
  ADD KEY `EmployeeNum` (`EmployeeNum`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `EmployeeNum` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `section`
--
ALTER TABLE `section`
  MODIFY `SectionNum` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `StudentNum` int(11) NOT NULL AUTO_INCREMENT;

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
  ADD CONSTRAINT `teacher_ibfk_1` FOREIGN KEY (`EmployeeNum`) REFERENCES `employee` (`EmployeeNum`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
