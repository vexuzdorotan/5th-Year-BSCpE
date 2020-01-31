-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 31, 2020 at 03:44 PM
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
-- Table structure for table `subjectcode`
--

CREATE TABLE `subjectcode` (
  `SubjectCode` varchar(255) NOT NULL,
  `SubjectDescription` text DEFAULT NULL,
  `GradeLevel` int(2) NOT NULL,
  `Frequency` int(1) NOT NULL,
  `DateCreated` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `User` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `subjectcode`
--

INSERT INTO `subjectcode` (`SubjectCode`, `SubjectDescription`, `GradeLevel`, `Frequency`, `DateCreated`, `User`) VALUES
('AP 10', 'Araling Panlipunan (AP) 10', 10, 3, '2020-01-31 14:26:00', 'admin'),
('AP 7', 'Araling Panlipunan (AP) 7', 7, 3, '2020-01-30 10:05:42', 'admin'),
('AP 8', 'Araling Panlipunan (AP) 8', 8, 3, '2020-01-31 14:26:08', 'admin'),
('AP 9', 'Araling Panlipunan (AP) 9', 9, 3, '2020-01-31 14:26:14', 'admin'),
('ENG 10', 'English 10', 10, 4, '2020-01-31 14:26:20', 'admin'),
('ENG 7 ', 'English 7', 7, 4, '2020-01-30 10:11:46', 'admin'),
('ENG 8', 'English 8', 8, 4, '2020-01-31 14:26:28', 'admin'),
('ENG 9', 'English 9', 9, 4, '2020-01-31 14:26:34', 'admin'),
('ESP 10', '	Edukasyon sa Pagpapakatao (EsP) 10', 10, 3, '2020-01-31 14:26:43', 'admin'),
('ESP 7', 'Edukasyon sa Pagpapakatao (EsP) 7', 7, 2, '2020-01-30 10:06:14', 'admin'),
('ESP 8', '	Edukasyon sa Pagpapakatao (EsP) 8', 8, 3, '2020-01-31 14:26:49', 'admin'),
('ESP 9', '	Edukasyon sa Pagpapakatao (EsP) 9', 9, 3, '2020-01-31 14:26:53', 'admin'),
('FIL 10', 'Filipino 10', 10, 4, '2020-01-31 14:27:01', 'admin'),
('FIL 7', 'Filipino 7', 7, 4, '2020-01-30 10:06:29', 'admin'),
('FIL 8', 'Filipino 8', 8, 4, '2020-01-31 14:27:06', 'admin'),
('FIL 9', 'Filipino 9', 9, 4, '2020-01-31 14:27:16', 'admin'),
('FOLA 10', 'Foreign Language II 10', 10, 4, '2020-01-31 14:27:44', 'admin'),
('FOLA 9', 'Foreign Language I 9', 9, 4, '2020-01-31 14:30:26', 'admin'),
('HOMEROOM 10', 'Homeroom 10', 10, 1, '2020-01-31 14:27:58', 'admin'),
('MAPEH 10', 'MAPEH 10', 10, 3, '2020-01-31 14:28:06', 'admin'),
('MAPEH 7', 'MAPEH 7', 7, 4, '2020-01-31 08:50:01', 'admin'),
('MAPEH 8', 'MAPEH 8', 8, 4, '2020-01-31 14:28:12', 'admin'),
('MAPEH 9', 'MAPEH 9', 9, 4, '2020-01-31 14:28:16', 'admin'),
('MATH 10A', 'Mathematics 10', 10, 4, '2020-01-31 14:28:32', 'admin'),
('MATH 10B', '____ (Math B) 10', 10, 4, '2020-01-31 14:29:56', 'admin'),
('MATH 7A', 'Mathematics 7', 7, 4, '2020-01-30 10:07:07', 'admin'),
('MATH 7B', 'Geometry (Math B) 7', 7, 4, '2020-01-30 10:08:12', 'admin'),
('MATH 8A', 'Mathematics 8', 8, 4, '2020-01-31 14:29:06', 'admin'),
('MATH 8B', '____ (Math B) 8', 8, 4, '2020-01-31 14:30:01', 'admin'),
('MATH 9A', 'Mathematics 9', 9, 4, '2020-01-31 14:29:15', 'admin'),
('MATH 9B', '____ (Math B) 9', 9, 4, '2020-01-31 14:30:07', 'admin'),
('RESEARCH 7', 'Research I 7', 7, 4, '2020-01-30 10:11:36', 'admin'),
('RESEARCH 8', 'Research II 8', 8, 4, '2020-01-31 14:30:17', 'admin'),
('SCI 10A', 'Science 10', 10, 4, '2020-01-31 14:31:19', 'admin'),
('SCI 10B', '____ (Science B) 10', 10, 4, '2020-01-31 14:30:51', 'admin'),
('SCI 7A', 'Science 7', 7, 4, '2020-01-30 10:07:43', 'admin'),
('SCI 7B', 'BioTech (Science B) 7', 7, 4, '2020-01-30 10:08:18', 'admin'),
('SCI 8A', 'Science 8', 8, 4, '2020-01-31 14:31:25', 'admin'),
('SCI 8B', '____ (Science B) 8', 8, 4, '2020-01-31 14:30:59', 'admin'),
('SCI 9A', 'Science 9', 9, 4, '2020-01-31 14:31:30', 'admin'),
('SCI 9B', '____ (Science B) 9', 9, 4, '2020-01-31 14:31:05', 'admin'),
('TLE 10', 'Technology and Livelihood Education (TLE) 10', 10, 4, '2020-01-31 14:31:39', 'admin'),
('TLE 7', 'Technology and Livelihood Education (TLE) 7', 7, 4, '2020-01-30 10:08:31', 'admin'),
('TLE 8', 'Technology and Livelihood Education (TLE) 8', 8, 4, '2020-01-31 14:31:43', 'admin'),
('TLE 9', 'Technology and Livelihood Education (TLE) 9', 9, 4, '2020-01-31 14:31:47', 'admin');

--
-- Triggers `subjectcode`
--
DELIMITER $$
CREATE TRIGGER `after insert subjectcode` AFTER INSERT ON `subjectcode` FOR EACH ROW INSERT INTO subjectcode_backup 
SELECT *, "CREATED" FROM subjectcode
WHERE SubjectCode = new.SubjectCode
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `backup subjectcode UPDATE trigger` AFTER UPDATE ON `subjectcode` FOR EACH ROW INSERT INTO subjectcode_backup 
SELECT *, "UPDATED" FROM subjectcode
WHERE SubjectCode = new.SubjectCode
$$
DELIMITER ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `subjectcode`
--
ALTER TABLE `subjectcode`
  ADD PRIMARY KEY (`SubjectCode`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
