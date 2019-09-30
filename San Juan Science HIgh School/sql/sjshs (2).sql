-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 23, 2019 at 02:50 PM
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
-- Triggers `employee`
--
DELIMITER $$
CREATE TRIGGER `AFTER INSERT` AFTER INSERT ON `employee` FOR EACH ROW INSERT INTO teacher(EmployeeNum, Name) SELECT EmployeeNum, CONCAT(FirstName , " " , LEFT(MiddleName, 1), " " ,LastName) FROM employee WHERE New.Position = "Teacher" ORDER BY EmployeeNum DESC LIMIT 1
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
  `RoomType` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `section`
--

CREATE TABLE `section` (
  `SectionName` varchar(255) NOT NULL,
  `GradeLevel` varchar(8) NOT NULL,
  `RoomNum` int(10) DEFAULT NULL,
  `SectionNum` int(11) NOT NULL,
  `Adviser` varchar(255) DEFAULT NULL,
  `Population` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
  `EmployeeNum` int(11) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Section` int(11) NOT NULL,
  `Schedule` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `EmployeeNum` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `section`
--
ALTER TABLE `section`
  MODIFY `SectionNum` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `StudentNum` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
