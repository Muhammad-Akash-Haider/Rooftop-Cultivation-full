-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 14, 2024 at 03:02 PM
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
(1, 25, 'pi_3OolkjDLpC8Qo70I2ZznAz5i'),
(2, 25, 'pi_3OqtWuDLpC8Qo70I2kScDPk2');

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
(24, '26', 32, 2);

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
  `payment_id` varchar(1000) NOT NULL,
  `status` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `buyer_id`, `order_date`, `payment_id`, `status`) VALUES
(6, 25, '2024-02-21 20:56:52', 'pi_3OmWydDLpC8Qo70I0iQFD2oW', 'Completed'),
(10, 26, '2024-02-28 18:09:43', 'pi_3OomtCDLpC8Qo70I1f3KTNbT', 'Pending'),
(32, 26, '2024-03-05 13:37:56', 'pi_3OqtVODLpC8Qo70I1W6iZdqB', 'Pending');

-- --------------------------------------------------------

--
-- Table structure for table `order_items`
--

CREATE TABLE `order_items` (
  `id` int(200) NOT NULL,
  `order_id` int(200) NOT NULL,
  `product_id` int(200) NOT NULL,
  `quantity` int(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `order_items`
--

INSERT INTO `order_items` (`id`, `order_id`, `product_id`, `quantity`) VALUES
(1, 4, 31, 2),
(2, 5, 31, 2),
(3, 5, 30, 2),
(4, 6, 31, 1),
(5, 7, 34, 2),
(6, 8, 31, 2),
(7, 9, 31, 1),
(8, 10, 32, 1),
(9, 32, 31, 1);

-- --------------------------------------------------------

--
-- Table structure for table `payments_history`
--

CREATE TABLE `payments_history` (
  `id` int(64) NOT NULL,
  `buyer_id` int(50) NOT NULL,
  `payment_date` int(64) NOT NULL,
  `payment_method` char(128) NOT NULL,
  `order_ids` varchar(500) NOT NULL,
  `payment_amount` int(6) NOT NULL,
  `seller_id` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `payments_history`
--

INSERT INTO `payments_history` (`id`, `buyer_id`, `payment_date`, `payment_method`, `order_ids`, `payment_amount`, `seller_id`) VALUES
(1, 0, 20230312, 'jazzcash', '2023-02-12', 2000, 25),
(2, 0, 20230812, 'jazzcash', '2023-08-12', 2500, 25);

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
(30, '25', 'Iris virginica ', 2500, 7, 'flowers', '<h2><em>Itea virginica</em></h2><h3><em>Itea virginica</em>&nbsp;L.</h3><h3>Virginia Sweetspire, Tassel-white, Virginia Willow</h3><p>Virginia sweetspire is a mound-shaped, slender-branched,&nbsp;<span style=\"color: rgb(103, 118, 23);\">deciduous</span>&nbsp;<span style=\"color: rgb(103, 118, 23);\">shrub</span>&nbsp;to 10 ft. Small, white flowers bloom in 4 in. spires that droop with the arching branches. Flowers open from base to tip so that the plant appears to bloom for a long time. Leaves turn red to purple in fall and persist well into the winter. This plant is&nbsp;<span style=\"color: rgb(103, 118, 23);\">semi-evergreen</span>&nbsp;in the southern part of its range.</p><p>The long tassels of white flowers and red fall foliage make this an attractive ornamental. Most effective in massed plantings, as single plants tend to be scraggly.</p><p>&nbsp;</p>', 'images-1704622464852-images-1701595984146-satosa3).jpeg, images-1704622464852-images-1701596015936-satosa1).jpeg, images-1704622464853-images-1701596015936-satosa3).jpeg', 'medium', 'medium', 'outdoor'),
(31, '25', 'Setosa', 1400, 2, 'fruits', '<h3><strong>Why to Choose Kasur Nursery Farm Islamabad.</strong></h3><p>If you have a yard, garden or balcony that needs a little love, we can help.</p><p>We offer a wide range of plants in all shapes and sizes—from hardy flowers to tropical trees and shrubs. We also have a large selection of ornamental grasses, succulents and cacti.</p><p>We offer a range of garden design services in Bhara Kahu so you can choose what your garden needs for success. We can build your dream garden with our custom-designed gardens or we can help you bring your vision to life by designing your garden layout on our website.</p>', 'images-1704622593085-images-1701596015936-satosa3).jpeg, images-1701593799952-satosa3).jpeg, images-1701593799952-satosa (2).jpeg', 'medium', 'medium', 'indoor'),
(32, '25', 'Setosa tea', 1800, 2, 'fruits', '<h3><strong>Why to Choose Kasur Nursery Farm Islamabad.</strong></h3><p>If you have a yard, garden or balcony that needs a little love, we can help.</p><p>We offer a wide range of plants in all shapes and sizes—from hardy flowers to tropical trees and shrubs. We also have a large selection of ornamental grasses, succulents and cacti.</p><p>We offer a range of garden design services in Bhara Kahu so you can choose what your garden needs for success. We can build your dream garden with our custom-designed gardens or we can help you bring your vision to life by designing your garden layout on our website.</p>', 'images-1701596015936-satosa (2).jpeg, images-1701596015936-satosa3).jpeg, images-1701596015936-satosa1).jpeg', 'small', 'medium', 'both'),
(34, '25', 'Red Rose ', 1000, 8, 'flowers', '<p>This is my collection of rose have multiple bariants</p>', 'images-1704882669750-adelaide-hoodless-rose.jpg, images-1704882669750-04.-Rose-Flower-zoom-view-image.jpg', 'medium', 'high', 'outdoor');

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
  `phone` varchar(1000) NOT NULL,
  `status` int(100) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `First_name`, `last_name`, `email`, `password`, `user_type`, `city`, `phone`, `status`) VALUES
(25, 'Majid ', 'ali', 'ma5788678@gmail.com', '$2b$10$YjXfWrnKDSyYNnGa2yMoROOsX/I2hcRnrXy44pwRAXPazMn0teBXa', '1', 'Rawalpindi', '03185402854', 0),
(26, 'muhammad ', 'ashba', 'ashba@gmail.com', '$2b$10$YjXfWrnKDSyYNnGa2yMoROOsX/I2hcRnrXy44pwRAXPazMn0teBXa', '0', 'Rawalpindi', '03110794433', 0),
(34, 'zahid', 'ali', 'testproject@gmail.com', '$2b$10$ReaxTlslYCYIonzfg9wVcecIEq2lUiejmMfl19zPqzbwQ.OzoKxX6', '1', 'Rawalpindi', '03110794433', 0),
(61, 'majid', 'hassan', 'usermaji@gmail.com', '$2b$10$YjXfWrnKDSyYNnGa2yMoROOsX/I2hcRnrXy44pwRAXPazMn0teBXa', '0', 'Rawalpindi', '03110794433', 0);

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
  ADD PRIMARY KEY (`id`);

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
  ADD PRIMARY KEY (`id`);

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
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

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
  MODIFY `id` int(64) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `order_items`
--
ALTER TABLE `order_items`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `payments_history`
--
ALTER TABLE `payments_history`
  MODIFY `id` int(64) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

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
  MODIFY `id` int(64) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT for table `verification_documents`
--
ALTER TABLE `verification_documents`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
