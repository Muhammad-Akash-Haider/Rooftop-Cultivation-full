-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 05, 2023 at 08:18 AM
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
(5, '25', 31, 2),
(7, '26', 31, 3);

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
-- Table structure for table `Notifications`
--

CREATE TABLE `Notifications` (
  `id` int(200) NOT NULL,
  `user_id` int(100) NOT NULL,
  `reason` varchar(300) NOT NULL,
  `time` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Notifications`
--

INSERT INTO `Notifications` (`id`, `user_id`, `reason`, `time`) VALUES
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
  `gallery` varchar(500) NOT NULL,
  `phone_number` int(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `nursery`
--

INSERT INTO `nursery` (`id`, `seller_id`, `business_name`, `business_location`, `description`, `gallery`, `phone_number`) VALUES
(7, 25, 'Kasur Nursery', 'Main Simly Dam Road, Bank Colony Barakahu, Islamabad, Islamabad Capital Territory', '<h3><strong>Why to Choose Kasur Nursery Farm Islamabad.</strong></h3><p>If you have a yard, garden or balcony that needs a little love, we can help.</p><p>We offer a wide range of plants in all shapes and sizes—from hardy flowers to tropical trees and shrubs. We also have a large selection of ornamental grasses, succulents and cacti.</p><p>We offer a range of garden design services in Bhara Kahu so you can choose what your garden needs for success. We can build your dream garden with our custom-designed gardens or we can help you bring your vision to life by designing your garden layout on our website.</p>', 'images-1701593342454-kissan-nnl1o120i.png, images-1701593342455-kissan-nursery-garden-santhur-krishnagiri-plant-nurseries-yqnl1o120i.avif, images-1701593342456-2-8.jpg, images-1701593342460-image-pepper-nursery-new.jpg', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(64) NOT NULL,
  `customer_name` varchar(128) NOT NULL,
  `seller_id` int(100) NOT NULL,
  `buyer_id` int(50) NOT NULL,
  `order_date` varchar(200) DEFAULT NULL,
  `product_name` varchar(128) NOT NULL,
  `status` varchar(100) NOT NULL,
  `order_amount` int(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `customer_name`, `seller_id`, `buyer_id`, `order_date`, `product_name`, `status`, `order_amount`) VALUES
(1, 'ali', 0, 0, '12/7/2023', 'alevora plant', 'Completed', 2000),
(2, 'zahra', 25, 0, '12/9/2023', 'virginica plant', 'cancel', 4000),
(3, 'danyal', 25, 0, '11/8/2023', 'rose dragon plant', 'Pending', 2500);

-- --------------------------------------------------------

--
-- Table structure for table `payments_history`
--

CREATE TABLE `payments_history` (
  `id` int(64) NOT NULL,
  `seller_id` int(11) NOT NULL,
  `buyer_id` int(50) NOT NULL,
  `sender_name` varchar(128) NOT NULL,
  `payment_date` int(64) NOT NULL,
  `payment_method` char(128) NOT NULL,
  `order_date` date NOT NULL,
  `payment_amount` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `payments_history`
--

INSERT INTO `payments_history` (`id`, `seller_id`, `buyer_id`, `sender_name`, `payment_date`, `payment_method`, `order_date`, `payment_amount`) VALUES
(1, 0, 0, 'sehar', 20230312, 'jazzcash', '2023-02-12', 2000),
(2, 25, 0, 'maya', 20230812, 'jazzcash', '2023-08-12', 2500);

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
(30, '25', 'Iris virginica', 2500, 7, 'flowers', '<h2><em>Itea virginica</em></h2><h3><em>Itea virginica</em>&nbsp;L.</h3><h3>Virginia Sweetspire, Tassel-white, Virginia Willow</h3><p>Virginia sweetspire is a mound-shaped, slender-branched,&nbsp;<span style=\"color: rgb(103, 118, 23);\">deciduous</span>&nbsp;<span style=\"color: rgb(103, 118, 23);\">shrub</span>&nbsp;to 10 ft. Small, white flowers bloom in 4 in. spires that droop with the arching branches. Flowers open from base to tip so that the plant appears to bloom for a long time. Leaves turn red to purple in fall and persist well into the winter. This plant is&nbsp;<span style=\"color: rgb(103, 118, 23);\">semi-evergreen</span>&nbsp;in the southern part of its range.</p><p>The long tassels of white flowers and red fall foliage make this an attractive ornamental. Most effective in massed plantings, as single plants tend to be scraggly.</p><p>&nbsp;</p>', 'images-1701592866157-images.jpeg, images-1701592866158-download (1).jpeg, images-1701592866158-1.jpeg'),
(31, '25', 'Setosa', 1400, 2, 'fruits', '<h3><strong>Why to Choose Kasur Nursery Farm Islamabad.</strong></h3><p>If you have a yard, garden or balcony that needs a little love, we can help.</p><p>We offer a wide range of plants in all shapes and sizes—from hardy flowers to tropical trees and shrubs. We also have a large selection of ornamental grasses, succulents and cacti.</p><p>We offer a range of garden design services in Bhara Kahu so you can choose what your garden needs for success. We can build your dream garden with our custom-designed gardens or we can help you bring your vision to life by designing your garden layout on our website.</p>', 'images-1701593799952-satosa3).jpeg, images-1701593799952-satosa (2).jpeg, images-1701593799952-satosa1).jpeg'),
(32, '25', 'Setosa tea', 1800, 2, 'fruits', '<h3><strong>Why to Choose Kasur Nursery Farm Islamabad.</strong></h3><p>If you have a yard, garden or balcony that needs a little love, we can help.</p><p>We offer a wide range of plants in all shapes and sizes—from hardy flowers to tropical trees and shrubs. We also have a large selection of ornamental grasses, succulents and cacti.</p><p>We offer a range of garden design services in Bhara Kahu so you can choose what your garden needs for success. We can build your dream garden with our custom-designed gardens or we can help you bring your vision to life by designing your garden layout on our website.</p>', 'images-1701596015936-satosa (2).jpeg, images-1701596015936-satosa3).jpeg, images-1701596015936-satosa1).jpeg');

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
  `phone` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `First_name`, `last_name`, `email`, `password`, `user_type`, `city`, `phone`) VALUES
(23, 'Majid', 'ali', 'majidali37406@gmail.com', '$2b$10$YjXfWrnKDSyYNnGa2yMoROOsX/I2hcRnrXy44pwRAXPazMn0teBXa', '1', 'Rawalpindi', '03110794433'),
(25, 'Majid ', 'ali', 'ma5788678@gmail.com', '$2b$10$YjXfWrnKDSyYNnGa2yMoROOsX/I2hcRnrXy44pwRAXPazMn0teBXa', '1', 'Rawalpindi', '03185402854'),
(26, 'muhammad ', 'ashba', 'ashba@gmail.com', '$2b$10$0aYB9LjezbOBHMkaDFxNsunRQxIypIo2i3Zqr7pYR9/eRDwEypnF6', '0', 'Rawalpindi', '03110794433');

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
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `chat`
--
ALTER TABLE `chat`
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `Notifications`
--
ALTER TABLE `Notifications`
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
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `Notifications`
--
ALTER TABLE `Notifications`
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
  MODIFY `id` int(64) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `return/cancels`
--
ALTER TABLE `return/cancels`
  MODIFY `id` int(64) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(64) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
