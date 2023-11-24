-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 24, 2023 at 05:30 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rooftop-cultivation`
--

-- --------------------------------------------------------

--
-- Table structure for table `chat`
--

CREATE TABLE `chat` (
  `id` int(64) NOT NULL,
  `sender_id` int(64) NOT NULL,
  `message` varchar(500) NOT NULL,
  `time` time(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `nursery`
--

CREATE TABLE `nursery` (
  `id` int(64) NOT NULL,
  `business_name` char(64) NOT NULL,
  `business_location` int(128) NOT NULL,
  `description` varchar(300) NOT NULL,
  `gallery` varchar(500) NOT NULL,
  `city` char(50) NOT NULL,
  `phone_number` int(20) NOT NULL,
  `gmail` varchar(50) NOT NULL,
  `password` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `nursery`
--

INSERT INTO `nursery` (`id`, `business_name`, `business_location`, `description`, `gallery`, `city`, `phone_number`, `gmail`, `password`) VALUES
(0, '[value-2]', 0, '[value-4]', '[value-5]', '[value-6]', 0, '[value-8]', 0),
(1, 'testname', 9238293, 'testdescription', 'testgallery', 'testcity', 1276873468, 'testgmail@123.com', 4780),
(1234, 'testname', 0, 'TestDescription', 'TestGallary', 'TestCity', 2147483647, 'TestGmail.com', 133342331);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(64) NOT NULL,
  `customer_name` varchar(128) NOT NULL,
  `order_date` date NOT NULL,
  `product_name` varchar(128) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `order_amount` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `payments_history`
--

CREATE TABLE `payments_history` (
  `id` int(64) NOT NULL,
  `sender_name` varchar(128) NOT NULL,
  `payment_date` int(64) NOT NULL,
  `payment_method` char(128) NOT NULL,
  `order_date` date NOT NULL,
  `payment_amount` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `plant`
--

CREATE TABLE `plant` (
  `id` int(64) NOT NULL,
  `name` varchar(128) NOT NULL,
  `price` int(6) NOT NULL,
  `stock` int(5) NOT NULL,
  `category` char(15) NOT NULL,
  `description` varchar(150) NOT NULL,
  `images` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `return/cancels`
--

CREATE TABLE `return/cancels` (
  `id` int(64) NOT NULL,
  `customer_name` char(64) NOT NULL,
  `order_date` date NOT NULL,
  `price` int(10) NOT NULL,
  `reasons` varchar(300) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `feedback` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(64) NOT NULL,
  `First_name` char(64) NOT NULL,
  `last_name` varchar(10) NOT NULL,
  `email` varchar(20) NOT NULL,
  `password` varchar(255) NOT NULL,
  `user_type` varchar(20) NOT NULL,
  `city` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `First_name`, `last_name`, `email`, `password`, `user_type`, `city`) VALUES
(5, 'Muhammad', 'Ashba', 'muhammadashba52@gmai', '$2b$10$GyZrBgnxzGlYg7WVRbp5K.Rjz4SfOFhyHt53VtFVMrPCGlkiDn/Bm', 'Seller', 'wah cantt');

-- --------------------------------------------------------

--
-- Table structure for table `verified_users`
--

CREATE TABLE `verified_users` (
  `id` int(64) NOT NULL,
  `nursery_id` int(64) NOT NULL,
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chat`
--
ALTER TABLE `chat`
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `nursery`
--
ALTER TABLE `nursery`
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `payments_history`
--
ALTER TABLE `payments_history`
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `plant`
--
ALTER TABLE `plant`
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `return/cancels`
--
ALTER TABLE `return/cancels`
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `verified_users`
--
ALTER TABLE `verified_users`
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(64) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
