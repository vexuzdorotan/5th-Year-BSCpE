-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 12, 2019 at 04:57 PM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.3.9

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
-- Table structure for table `tblstudentgrade`
--

CREATE TABLE `tblstudentgrade` (
  `GradeID` int(11) NOT NULL,
  `StudentNum` int(11) NOT NULL,
  `GradeLevel` int(11) NOT NULL,
  `SubjectName` varchar(50) NOT NULL,
  `QtrFinalRemark` varchar(50) NOT NULL,
  `GradeRating` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tblstudentgrade`
--

INSERT INTO `tblstudentgrade` (`GradeID`, `StudentNum`, `GradeLevel`, `SubjectName`, `QtrFinalRemark`, `GradeRating`) VALUES
(8, 0, 10, 'sci', 'q1', 74),
(9, 0, 10, 'sci', 'q2', 74),
(10, 0, 10, 'sci', 'q3', 74),
(11, 0, 10, 'sci', 'q4', 74),
(12, 0, 10, 'sci', 'final', 74),
(13, 0, 10, 'sci', 'remark', 0),
(14, 0, 10, 'esp', 'q4', 84),
(15, 2, 7, 'eng', 'q1', 81),
(16, 2, 7, 'eng', 'q2', 82),
(17, 2, 7, 'eng', 'q3', 83),
(18, 2, 7, 'eng', 'q4', 84),
(19, 2, 7, 'eng', 'final', 82.5),
(20, 2, 7, 'eng', 'remark', 1),
(21, 2, 7, 'health', 'q4', 75);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tblstudentgrade`
--
ALTER TABLE `tblstudentgrade`
  ADD PRIMARY KEY (`GradeID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tblstudentgrade`
--
ALTER TABLE `tblstudentgrade`
  MODIFY `GradeID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
