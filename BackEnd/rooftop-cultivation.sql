-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 23, 2024 at 07:02 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

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
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(100) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `email`, `password`) VALUES
(1, 'admin@gmail.com', '$2b$10$YjXfWrnKDSyYNnGa2yMoROOsX/I2hcRnrXy44pwRAXPazMn0teBXa');

-- --------------------------------------------------------

--
-- Table structure for table `bankaccounts`
--

CREATE TABLE `bankaccounts` (
  `id` int(200) NOT NULL,
  `seller_id` int(200) NOT NULL,
  `payment_id` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bankaccounts`
--

INSERT INTO `bankaccounts` (`id`, `seller_id`, `payment_id`) VALUES
(1, 25, 'pi_3OxMHPDLpC8Qo70I0xsd7Igf');

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id` int(100) NOT NULL,
  `buyer_id` varchar(100) NOT NULL,
  `product_id` int(100) NOT NULL,
  `stock` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`id`, `buyer_id`, `product_id`, `stock`) VALUES
(5, '25', 31, 2);

-- --------------------------------------------------------

--
-- Table structure for table `chat`
--

CREATE TABLE `chat` (
  `chatid` int(64) NOT NULL,
  `sender_id` int(64) NOT NULL,
  `receiver_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `chat`
--

INSERT INTO `chat` (`chatid`, `sender_id`, `receiver_id`) VALUES
(7, 26, 25);

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `messageid` int(64) NOT NULL,
  `chatid` int(64) NOT NULL,
  `message` varchar(500) NOT NULL,
  `recieverseen` int(10) NOT NULL DEFAULT 0,
  `date_time` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`messageid`, `chatid`, `message`, `recieverseen`, `date_time`) VALUES
(20, 7, 'hey', 0, '2024-04-22 17:45:06');

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

CREATE TABLE `notifications` (
  `id` int(200) NOT NULL,
  `user_id` int(100) NOT NULL,
  `reason` varchar(300) NOT NULL,
  `time` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `notifications`
--

INSERT INTO `notifications` (`id`, `user_id`, `reason`, `time`) VALUES
(1, 25, 'order', '2 25');

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
  `gallery` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `nursery`
--

INSERT INTO `nursery` (`id`, `seller_id`, `business_name`, `business_location`, `description`, `gallery`) VALUES
(7, 25, 'Kasur Nursery', 'Main Simly Dam Road, Bank Colony Barakahu, Islamabad, Islamabad Capital Territory', '<h3><strong>Why to Choose Kasur Nursery Farm Islamabad.</strong></h3><p>If you have a yard, garden or balcony that needs a little love, we can help.</p><p>We offer a wide range of plants in all shapes and sizes—from hardy flowers to tropical trees and shrubs. We also have a large selection of ornamental grasses, succulents and cacti.</p><p>We offer a range of garden design services in Bhara Kahu so you can choose what your garden needs for success. We can build your dream garden with our custom-designed gardens or we can help you bring your vision to life by designing your garden layout on our website.</p>', 'images-1704622766027-asdasdasd.jpeg, images-1704622766028-images-1701593342454-kissan-nnl1o120i.png, images-1704622766031-images-1701593342455-kissan-nursery-garden-santhur-krishnagiri-plant-nurseries-yqnl1o120i.avif, images-1704622766049-images-1701593342460-image-pepper-nursery-new.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(64) NOT NULL,
  `buyer_id` int(50) NOT NULL,
  `order_date` datetime DEFAULT NULL,
  `payment_id` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `buyer_id`, `order_date`, `payment_id`) VALUES
(41, 26, '2024-03-23 09:41:59', 'pi_3OomtCDLpC8Qo70I1f3KTNbT'),
(42, 26, '2024-03-26 11:48:21', 'pi_3OyTnwDLpC8Qo70I0F2L7Bt8'),
(43, 26, '2024-04-14 13:14:23', 'pi_3P5OCYDLpC8Qo70I0ULUaciJ'),
(44, 26, '2024-04-22 19:45:44', 'pi_3P8O7iDLpC8Qo70I2iXJFDtY');

-- --------------------------------------------------------

--
-- Table structure for table `order_items`
--

CREATE TABLE `order_items` (
  `items_id` int(200) NOT NULL,
  `order_id` int(200) NOT NULL,
  `product_id` int(200) NOT NULL,
  `quantity` int(200) NOT NULL,
  `status` varchar(500) NOT NULL DEFAULT 'Pending',
  `change_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `order_items`
--

INSERT INTO `order_items` (`items_id`, `order_id`, `product_id`, `quantity`, `status`, `change_date`) VALUES
(19, 41, 30, 1, 'Return', '2024-03-24 17:02:01'),
(20, 41, 34, 1, 'Cancelled', '2024-03-24 15:19:21'),
(21, 42, 31, 1, 'Completed', '2024-03-26 11:50:48'),
(22, 43, 30, 1, 'Cancelled', '2024-04-14 14:09:53'),
(23, 44, 30, 1, 'Pending', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `payments_history`
--

CREATE TABLE `payments_history` (
  `id` int(64) NOT NULL,
  `payment_date` datetime NOT NULL,
  `payment_method` char(128) NOT NULL,
  `payment_amount` int(6) NOT NULL,
  `order_id` int(200) NOT NULL,
  `seller_id` int(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `payments_history`
--

INSERT INTO `payments_history` (`id`, `payment_date`, `payment_method`, `payment_amount`, `order_id`, `seller_id`) VALUES
(5, '2024-03-24 14:04:59', 'Bank Transfer', 2500, 19, 25);

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
  `images` mediumtext NOT NULL,
  `size` varchar(1000) NOT NULL,
  `sensitivity` text NOT NULL,
  `inoutdoor` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `plant`
--

INSERT INTO `plant` (`id`, `seller_id`, `name`, `price`, `stock`, `category`, `description`, `images`, `size`, `sensitivity`, `inoutdoor`) VALUES
(30, '25', 'Iris virginica ', 2500, 1, 'flowers', '<h2><em>Itea virginica</em></h2><h3><em>Itea virginica</em>&nbsp;L.</h3><h3>Virginia Sweetspire, Tassel-white, Virginia Willow</h3><p>Virginia sweetspire is a mound-shaped, slender-branched,&nbsp;<span style=\"color: rgb(103, 118, 23);\">deciduous</span>&nbsp;<span style=\"color: rgb(103, 118, 23);\">shrub</span>&nbsp;to 10 ft. Small, white flowers bloom in 4 in. spires that droop with the arching branches. Flowers open from base to tip so that the plant appears to bloom for a long time. Leaves turn red to purple in fall and persist well into the winter. This plant is&nbsp;<span style=\"color: rgb(103, 118, 23);\">semi-evergreen</span>&nbsp;in the southern part of its range.</p><p>The long tassels of white flowers and red fall foliage make this an attractive ornamental. Most effective in massed plantings, as single plants tend to be scraggly.</p><p>&nbsp;</p>', 'images-1704622464852-images-1701595984146-satosa3).jpeg, images-1704622464852-images-1701596015936-satosa1).jpeg, images-1704622464853-images-1701596015936-satosa3).jpeg', 'medium', 'medium', 'outdoor'),
(31, '25', 'Setosa', 1400, 1, 'fruits', '<h3><strong>Why to Choose Kasur Nursery Farm Islamabad.</strong></h3><p>If you have a yard, garden or balcony that needs a little love, we can help.</p><p>We offer a wide range of plants in all shapes and sizes—from hardy flowers to tropical trees and shrubs. We also have a large selection of ornamental grasses, succulents and cacti.</p><p>We offer a range of garden design services in Bhara Kahu so you can choose what your garden needs for success. We can build your dream garden with our custom-designed gardens or we can help you bring your vision to life by designing your garden layout on our website.</p>', 'images-1704622593085-images-1701596015936-satosa3).jpeg, images-1701593799952-satosa3).jpeg, images-1701593799952-satosa (2).jpeg', 'medium', 'medium', 'indoor'),
(32, '25', 'Setosa tea', 1800, 2, 'fruits', '<h3><strong>Why to Choose Kasur Nursery Farm Islamabad.</strong></h3><p>If you have a yard, garden or balcony that needs a little love, we can help.</p><p>We offer a wide range of plants in all shapes and sizes—from hardy flowers to tropical trees and shrubs. We also have a large selection of ornamental grasses, succulents and cacti.</p><p>We offer a range of garden design services in Bhara Kahu so you can choose what your garden needs for success. We can build your dream garden with our custom-designed gardens or we can help you bring your vision to life by designing your garden layout on our website.</p>', 'images-1701596015936-satosa (2).jpeg, images-1701596015936-satosa3).jpeg, images-1701596015936-satosa1).jpeg', 'small', 'medium', 'both'),
(34, '25', 'Red Rose ', 1000, 1, 'flowers', '<p>This is my collection of rose have multiple bariants</p>', 'images-1704882669750-adelaide-hoodless-rose.jpg, images-1704882669750-04.-Rose-Flower-zoom-view-image.jpg', 'medium', 'high', 'outdoor');

-- --------------------------------------------------------

--
-- Table structure for table `return/cancels`
--

CREATE TABLE `return/cancels` (
  `id` int(64) NOT NULL,
  `seller_id` int(100) NOT NULL,
  `buyer_id` int(50) NOT NULL,
  `customer_name` char(64) NOT NULL,
  `order_date` varchar(200) NOT NULL,
  `price` int(10) NOT NULL,
  `reasons` varchar(300) NOT NULL,
  `status` varchar(400) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `return/cancels`
--

INSERT INTO `return/cancels` (`id`, `seller_id`, `buyer_id`, `customer_name`, `order_date`, `price`, `reasons`, `status`) VALUES
(1, 0, 0, 'sehar', '2023-20-22', 2000, 'Product damage', 'returned'),
(2, 25, 0, 'sehar', '2023-20-22', 2000, 'Product damage', 'returned'),
(3, 25, 0, 'hassan', '2023-2-22', 3000, 'Product damage', 'returned');

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
  `delievery_address` varchar(1000) DEFAULT NULL,
  `phone` varchar(1000) NOT NULL,
  `user_status` int(100) DEFAULT 0,
  `otp` int(100) DEFAULT NULL,
  `email_verified` int(100) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `First_name`, `last_name`, `email`, `password`, `user_type`, `city`, `delievery_address`, `phone`, `user_status`, `otp`, `email_verified`) VALUES
(25, 'Majid ', 'ali', 'ma5788678@gmail.com', '$2b$10$YjXfWrnKDSyYNnGa2yMoROOsX/I2hcRnrXy44pwRAXPazMn0teBXa', '1', 'Rawalpindi', NULL, '03185402854', 1, 968597, 1),
(26, 'muhammad ', 'ashba', 'majid.glaxit@gmail.com', '$2b$10$YjXfWrnKDSyYNnGa2yMoROOsX/I2hcRnrXy44pwRAXPazMn0teBXa', '0', 'Rawalpindi', 'wah cantt b block taxila islamabd', '03110794433', 0, 321489, 1),
(69, 'asfasd ', 'yar', 'asfand@gamil.com', '$2b$10$RFxExNvU/.mSF1CzZGhvFOq339dI1vKNHsUPuq39nY15MN/MvXVkW', '1', 'Islamabad', NULL, '03110794433', 0, 557704, 1);

-- --------------------------------------------------------

--
-- Table structure for table `verification_documents`
--

CREATE TABLE `verification_documents` (
  `id` int(100) NOT NULL,
  `user_id` int(100) NOT NULL,
  `id_documents` varchar(500) NOT NULL,
  `address_prove` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `verification_documents`
--

INSERT INTO `verification_documents` (`id`, `user_id`, `id_documents`, `address_prove`) VALUES
(12, 25, 'idDocument-1709628011513-Add nursery system sequence diagram.drawio.png', 'addressProof-1709628011522-Manage Product system sequence diagram.drawio.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bankaccounts`
--
ALTER TABLE `bankaccounts`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `seller_id` (`seller_id`);

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `chat`
--
ALTER TABLE `chat`
  ADD UNIQUE KEY `id` (`chatid`);

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`messageid`);

--
-- Indexes for table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id`);

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
-- Indexes for table `order_items`
--
ALTER TABLE `order_items`
  ADD PRIMARY KEY (`items_id`);

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
-- Indexes for table `verification_documents`
--
ALTER TABLE `verification_documents`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `bankaccounts`
--
ALTER TABLE `bankaccounts`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `chat`
--
ALTER TABLE `chat`
  MODIFY `chatid` int(64) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `messageid` int(64) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `nursery`
--
ALTER TABLE `nursery`
  MODIFY `id` int(64) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(64) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT for table `order_items`
--
ALTER TABLE `order_items`
  MODIFY `items_id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `payments_history`
--
ALTER TABLE `payments_history`
  MODIFY `id` int(64) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `plant`
--
ALTER TABLE `plant`
  MODIFY `id` int(64) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `return/cancels`
--
ALTER TABLE `return/cancels`
  MODIFY `id` int(64) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(64) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;

--
-- AUTO_INCREMENT for table `verification_documents`
--
ALTER TABLE `verification_documents`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
