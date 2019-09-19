-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 19, 2019 at 06:05 AM
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
-- Table structure for table `employee_records`
--

CREATE TABLE `employee_records` (
  `Employee_Number` int(11) NOT NULL,
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
-- Dumping data for table `employee_records`
--

INSERT INTO `employee_records` (`Employee_Number`, `LastName`, `FirstName`, `MiddleName`, `Birthday`, `Age`, `Street_Address1`, `Street_Address2`, `City`, `Province`, `Country`, `Gender`, `Position`, `URL_Picture`) VALUES
(2, 'Gabon', 'Jose Mari', 'Manuel', '1997-03-28', 22, '23 E Caruncho Ave', 'Malinao', 'Pasig', 'Metro Manila', 'Philippines', 'male', 'Teacher', '../pictures/employee/2by2.jpg'),
(3, 'M1', 'M1', 'M1', '1997-03-28', 22, 'M1', 'M1', 'M1', 'M1', 'Philippines', 'male', 'Teacher', '../pictures/employee/M1.jpg'),
(4, 'Gabon', 'Jose', 'Manuel', '1997-03-28', 22, '242 E Caruncho Ave', 'Pinagbuhatan', 'Pasig', 'Metro Manila', 'Philippines', 'male', 'Teacher', '../pictures/employee/2by2.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `room`
--

CREATE TABLE `room` (
  `RoomNum` int(10) NOT NULL,
  `RoomName` varchar(255) NOT NULL,
  `Floor` int(2) NOT NULL,
  `Capacity` int(2) NOT NULL,
  `RoomType` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `room`
--

INSERT INTO `room` (`RoomNum`, `RoomName`, `Floor`, `Capacity`, `RoomType`) VALUES
(0, '', 0, 0, ''),
(666, 'Satanic', 6, 50, '');

-- --------------------------------------------------------

--
-- Table structure for table `student_records`
--

CREATE TABLE `student_records` (
  `Student_Number` int(11) NOT NULL,
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

--
-- Dumping data for table `student_records`
--

INSERT INTO `student_records` (`Student_Number`, `LastName`, `FirstName`, `MiddleName`, `Birthday`, `Age`, `Street_Address1`, `Street_Address2`, `City`, `Province`, `Country`, `Gender`, `GradeLevel`, `Type`, `URL_Picture`) VALUES
(1, 'Gabon', 'Jose', 'Mari', '1997-03-28', 22, '242 E Caruncho Ave', 'Pinagbuhatan', 'Pasig', 'Metro Manila', 'Philippines', 'Male', 'Grade 7', 'Old', '../pictures/student/2by2.jpg'),
(2, 'Gabon', 'Jose', 'Manuel', '1997-03-28', 22, '242 Marigold St', 'Pinagbuhatan', 'Pasig', 'Metro Manila', 'Philippines', 'Male', 'Grade 7', 'Old', '../pictures/student/2by2.jpg'),
(3, 'Gabon', 'Ernesto', 'Baccol', '1969-01-03', 50, 'null', 'null', 'null', 'Jeddah', 'Saudi Arabia', 'Male', 'Grade 7', 'Old', '../pictures/student/2by2.jpg'),
(4, 'Gabon', 'Jose', 'Manuel', '1997-03-28', 22, 'null', 'null', 'Pasig', 'Metro Manila', 'Philippines', 'Male', 'Grade 7', 'Old', '../pictures/student/2by2.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `employee_records`
--
ALTER TABLE `employee_records`
  ADD PRIMARY KEY (`Employee_Number`);

--
-- Indexes for table `room`
--
ALTER TABLE `room`
  ADD PRIMARY KEY (`RoomNum`);

--
-- Indexes for table `student_records`
--
ALTER TABLE `student_records`
  ADD PRIMARY KEY (`Student_Number`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `employee_records`
--
ALTER TABLE `employee_records`
  MODIFY `Employee_Number` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `student_records`
--
ALTER TABLE `student_records`
  MODIFY `Student_Number` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
