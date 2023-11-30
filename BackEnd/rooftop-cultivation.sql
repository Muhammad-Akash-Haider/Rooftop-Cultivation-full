-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 28, 2023 at 04:42 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.1.17

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
  `seller_id` int(255) NOT NULL,
  `business_name` varchar(200) NOT NULL,
  `business_location` varchar(300) NOT NULL,
  `description` varchar(7000) NOT NULL,
  `gallery` varchar(500) NOT NULL,
  `phone_number` int(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `nursery`
--

INSERT INTO `nursery` (`id`, `seller_id`, `business_name`, `business_location`, `description`, `gallery`, `phone_number`) VALUES
(1, 3, 'asmdmadn', 'wah acantt', 'asddddssssssssssssssssssssssss', 'images-1701015533101-screencapture-bookmee-co-uk-seller-profile-2023-11-12-10_30_56.png', NULL),
(2, 3, 'asmdmadn', 'wah acantt', 'asddddssssssssssssssssssssssss', 'images-1701015582656-screencapture-bookmee-co-uk-seller-profile-2023-11-12-10_30_56.png', NULL),
(3, 3, 'asmdmadn', 'wah acantt', 'asddddssssssssssssssssssssssss', 'images-1701015708843-screencapture-bookmee-co-uk-seller-profile-2023-11-12-10_30_56.png', NULL),
(4, 23, 'jasndlasd', 'wah cant', '<p class=\"ql-align-center\">Company name, Business structure, Owners, Location, Mission statement, Products and services, Target audience, Business goals, Target customers, Competitive advantages.&nbsp;</p><p><br></p><p>A business description can be a brief explanation of a company or a more detailed discussion of a product or service.&nbsp;It can also include how the company plans to succ</p>', 'images-1701016082117-WhatsApp Image 2023-05-19 at 2.53.10 PM (1).jpeg, images-1701016082121-WhatsApp Image 2023-05-19 at 2.53.10 PM.jpeg, images-1701016082124-WhatsApp Image 2023-05-19 at 2.53.09 PM.jpeg', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(64) NOT NULL,
  `customer_name` varchar(128) NOT NULL,
  `order_date` varchar(200) DEFAULT NULL,
  `product_name` varchar(128) NOT NULL,
  `status` varchar(100) NOT NULL,
  `order_amount` int(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `customer_name`, `order_date`, `product_name`, `status`, `order_amount`) VALUES
(1, 'ali', '12/7/2023', 'alevora plant', 'pending', 2000),
(2, 'zahra', '12/9/2023', 'virginica plant', 'pending', 4000),
(3, 'danyal', '11/8/2023', 'rose dragon plant', 'pending', 2500);

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

--
-- Dumping data for table `payments_history`
--

INSERT INTO `payments_history` (`id`, `sender_name`, `payment_date`, `payment_method`, `order_date`, `payment_amount`) VALUES
(1, 'sehar', 20230312, 'jazzcash', '2023-02-12', 2000),
(2, 'maya', 20230812, 'jazzcash', '2023-08-12', 2500);

-- --------------------------------------------------------

--
-- Table structure for table `plant`
--

CREATE TABLE `plant` (
  `id` int(64) NOT NULL,
  `seller_id` varchar(200) NOT NULL,
  `name` varchar(128) NOT NULL,
  `price` int(6) NOT NULL,
  `stock` int(5) NOT NULL,
  `category` char(15) NOT NULL,
  `description` varchar(15000) NOT NULL,
  `images` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `plant`
--

INSERT INTO `plant` (`id`, `seller_id`, `name`, `price`, `stock`, `category`, `description`, `images`) VALUES
(17, '23', 'alevora palnt', 2355, 5, 'seeds', '<p>this is a an owesome plant</p><h1>you will like this</h1>', 'images-1700920948206-Screencast from 23-11-2023 14:10:07.webm, images-1700920948256-screencapture-bookmee-co-uk-seller-notification-all-notifications-2023-11-12-10_30_30.png, images-1700920948260-123123.png'),
(18, '23', 'virginica', 2600, 5, 'flowers', '<h2><strong style=\"background-color: rgb(255, 255, 255); color: rgb(32, 33, 36);\">Properties </strong><span style=\"background-color: rgb(255, 255, 255); color: rgb(32, 33, 36);\">&nbsp;</span></h2><p><br></p><p><span style=\"background-color: rgb(255, 255, 255); color: rgb(32, 33, 36);\">                             Iris virginica is&nbsp;</span><span style=\"background-color: rgba(80, 151, 255, 0.18); color: rgb(4, 12, 40);\">a perennial plant that grows up to 0.6–0.9 m (2–3 ft) tall</span><span style=\"background-color: rgb(255, 255, 255); color: rgb(32, 33, 36);\">. The plant\'s sword-shaped basal leaves are erect or sometimes arching and measure up to 91 cm (3 ft) long and 2.5 cm (1 in) across at the base. The leaves have smooth margins and are bluish green to green and glabrous.</span></p>', 'images-1701008973971-WhatsApp Image 2023-05-19 at 2.53.10 PM (1).jpeg, images-1701008973976-WhatsApp Image 2023-05-19 at 2.53.10 PM.jpeg'),
(19, '23', 'alevora palnt', 2355, 3, 'flowers', '<p><span style=\"background-color: rgb(255, 255, 255); color: rgb(32, 33, 36);\">&nbsp;Iris virginica is&nbsp;</span><span style=\"background-color: rgba(80, 151, 255, 0.18); color: rgb(4, 12, 40);\">a perennial plant that grows up to 0.6–0.9 m (2–3 ft) tall</span><span style=\"background-color: rgb(255, 255, 255); color: rgb(32, 33, 36);\">. The plant\'s sword-shaped basal leaves are erect or sometimes arching and measure up to 91 cm (3 ft) long and 2.5 cm (1 in) across at the base. The leaves have smooth margins and are bluish green to green and glabrous.</span></p>', 'images-1701009200881-WhatsApp Image 2023-05-19 at 2.53.09 PM.jpeg'),
(20, '23', 'alevora palnt', 2355, 3, 'flowers', '<p><span style=\"background-color: rgb(255, 255, 255); color: rgb(32, 33, 36);\">&nbsp;Iris virginica is&nbsp;</span><span style=\"background-color: rgba(80, 151, 255, 0.18); color: rgb(4, 12, 40);\">a perennial plant that grows up to 0.6–0.9 m (2–3 ft) tall</span><span style=\"background-color: rgb(255, 255, 255); color: rgb(32, 33, 36);\">. The plant\'s sword-shaped basal leaves are erect or sometimes arching and measure up to 91 cm (3 ft) long and 2.5 cm (1 in) across at the base. The leaves have smooth margins and are bluish green to green and glabrous.</span></p>', 'images-1701009253853-WhatsApp Image 2023-05-19 at 2.53.09 PM.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `return/cancels`
--

CREATE TABLE `return/cancels` (
  `id` int(64) NOT NULL,
  `customer_name` char(64) NOT NULL,
  `order_date` varchar(200) NOT NULL,
  `price` int(10) NOT NULL,
  `reasons` varchar(300) NOT NULL,
  `status` varchar(400) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `return/cancels`
--

INSERT INTO `return/cancels` (`id`, `customer_name`, `order_date`, `price`, `reasons`, `status`) VALUES
(1, 'sehar', '2023-20-22', 2000, 'Product damage', 'returned'),
(2, 'sehar', '2023-20-22', 2000, 'Product damage', 'returned'),
(3, 'hassan', '2023-2-22', 3000, 'Product damage', 'returned');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(64) NOT NULL,
  `First_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(255) NOT NULL,
  `user_type` varchar(20) NOT NULL,
  `city` varchar(100) NOT NULL,
  `phone` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `First_name`, `last_name`, `email`, `password`, `user_type`, `city`, `phone`) VALUES
(23, 'Majid', 'ali', 'majidali37406@gmail.com', '$2b$10$qCxCh8gT7uGHow9rGeQpY.pRzdTuGVOvqlNN3jJoMODqdc0IH0LPC', '1', 'Rawalpindi', '03110794433');

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
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `verified_users`
--
ALTER TABLE `verified_users`
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `nursery`
--
ALTER TABLE `nursery`
  MODIFY `id` int(64) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(64) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `payments_history`
--
ALTER TABLE `payments_history`
  MODIFY `id` int(64) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `plant`
--
ALTER TABLE `plant`
  MODIFY `id` int(64) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `return/cancels`
--
ALTER TABLE `return/cancels`
  MODIFY `id` int(64) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(64) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
