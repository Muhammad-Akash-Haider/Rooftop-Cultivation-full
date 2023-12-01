-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 01, 2023 at 05:31 AM
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
-- Table structure for table `Notifications`
--

CREATE TABLE `Notifications` (
  `id` int(200) NOT NULL,
  `user_id` int(100) NOT NULL,
  `reason` varchar(300) NOT NULL,
  `time` varchar(500) NOT NULL
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
(5, 23, 'true business name', 'wah cant', '<p>alkdnflasndas</p><p>amaing</p>', 'images-1701364567479-asdasdasd (another copy).jpeg', NULL),
(6, 25, 'majid greneery', 'wah cant', '<h2>Background</h2><ul><li>Aloe is a cactus-like plant that grows in hot, dry climates. It is cultivated in subtropical regions around the world, including the southern border areas of Texas, New Mexico, Arizona, and California.</li><li>Historically, aloe has been used for skin conditions and was thought to improve baldness and promote wound healing.</li><li>Aloe is used topically (applied to the skin) and orally. Topical use of aloe is promoted for acne, lichen planus (a very itchy rash on the skin or in the mouth), oral submucous fibrosis, burning mouth syndrome, burns, and radiation-induced skin toxicity. Oral use of aloe is promoted for weight loss, diabetes, hepatitis, and inflammatory bowel disease (a group of conditions caused by gut inflammation that includes Crohn’s disease and ulcerative colitis).</li></ul><p><br></p>', 'images-1701398903332-screencapture-bookmee-co-uk-seller-notification-all-notifications-2023-11-12-10_30_30.png', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(64) NOT NULL,
  `customer_name` varchar(128) NOT NULL,
  `seller_id` int(100) NOT NULL,
  `order_date` varchar(200) DEFAULT NULL,
  `product_name` varchar(128) NOT NULL,
  `status` varchar(100) NOT NULL,
  `order_amount` int(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `customer_name`, `seller_id`, `order_date`, `product_name`, `status`, `order_amount`) VALUES
(1, 'ali', 0, '12/7/2023', 'alevora plant', 'completed', 2000),
(2, 'zahra', 0, '12/9/2023', 'virginica plant', 'cancel', 4000),
(3, 'danyal', 0, '11/8/2023', 'rose dragon plant', 'Pending', 2500);

-- --------------------------------------------------------

--
-- Table structure for table `payments_history`
--

CREATE TABLE `payments_history` (
  `id` int(64) NOT NULL,
  `seller_id` int(11) NOT NULL,
  `sender_name` varchar(128) NOT NULL,
  `payment_date` int(64) NOT NULL,
  `payment_method` char(128) NOT NULL,
  `order_date` date NOT NULL,
  `payment_amount` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `payments_history`
--

INSERT INTO `payments_history` (`id`, `seller_id`, `sender_name`, `payment_date`, `payment_method`, `order_date`, `payment_amount`) VALUES
(1, 0, 'sehar', 20230312, 'jazzcash', '2023-02-12', 2000),
(2, 0, 'maya', 20230812, 'jazzcash', '2023-08-12', 2500);

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
(17, '23', 'marenas', 1230, 17, 'plants', '<p>no data is written hereddfdf</p>', 'images-1701360635113-asdasdasd (another copy).jpeg, images-1701360635114-screencapture-bookmee-co-uk-seller-notification-all-notifications-2023-11-12-10_30_30.png'),
(18, '23', 'sdsdadaddfsdf', 1233, 17, 'plants', 'dcsdcdcsdc', 'images-1701352975340-asdasdasd.jpeg'),
(19, '23', 'alevora palnt', 2355, 3, 'flowers', '<p><span style=\"background-color: rgb(255, 255, 255); color: rgb(32, 33, 36);\">&nbsp;Iris virginica is&nbsp;</span><span style=\"background-color: rgba(80, 151, 255, 0.18); color: rgb(4, 12, 40);\">a perennial plant that grows up to 0.6–0.9 m (2–3 ft) tall</span><span style=\"background-color: rgb(255, 255, 255); color: rgb(32, 33, 36);\">. The plant\'s sword-shaped basal leaves are erect or sometimes arching and measure up to 91 cm (3 ft) long and 2.5 cm (1 in) across at the base. The leaves have smooth margins and are bluish green to green and glabrous.</span></p>', 'images-1701009200881-WhatsApp Image 2023-05-19 at 2.53.09 PM.jpeg'),
(20, '23', 'alevora palnt', 2355, 3, 'flowers', '<p><span style=\"background-color: rgb(255, 255, 255); color: rgb(32, 33, 36);\">&nbsp;Iris virginica is&nbsp;</span><span style=\"background-color: rgba(80, 151, 255, 0.18); color: rgb(4, 12, 40);\">a perennial plant that grows up to 0.6–0.9 m (2–3 ft) tall</span><span style=\"background-color: rgb(255, 255, 255); color: rgb(32, 33, 36);\">. The plant\'s sword-shaped basal leaves are erect or sometimes arching and measure up to 91 cm (3 ft) long and 2.5 cm (1 in) across at the base. The leaves have smooth margins and are bluish green to green and glabrous.</span></p>', 'images-1701009253853-WhatsApp Image 2023-05-19 at 2.53.09 PM.jpeg'),
(24, '2', '\"asmamsa\"', 232, 3, '\"flower\"', 's <p>asjkdkajd</p><ol><li>asdsadasdasasdasd</li></ol><h1>asdasdsadsad</h1>', 'images-1701179709717-screencapture-bookmee-co-uk-seller-notification-all-notifications-2023-11-12-10_30_30.png'),
(25, '25', 'alevera', 2355, 5, 'plants', '<h2>Background</h2><ul><li>Aloe is a cactus-like plant that grows in hot, dry climates. It is cultivated in subtropical regions around the world, including the southern border areas of Texas, New Mexico, Arizona, and California.</li><li>Historically, aloe has been used for skin conditions and was thought to improve baldness and promote wound healing.</li><li>Aloe is used topically (applied to the skin) and orally. Topical use of aloe is promoted for acne, lichen planus (a very itchy rash on the skin or in the mouth), oral submucous fibrosis, burning mouth syndrome, burns, and radiation-induced skin toxicity. Oral use of aloe is promoted for weight loss, diabetes, hepatitis, and inflammatory bowel disease (a group of conditions caused by gut inflammation that includes Crohn’s disease and ulcerative colitis).</li></ul>', 'images-1701398182365-asdasdasd (another copy).jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `return/cancels`
--

CREATE TABLE `return/cancels` (
  `id` int(64) NOT NULL,
  `seller_id` int(100) NOT NULL,
  `customer_name` char(64) NOT NULL,
  `order_date` varchar(200) NOT NULL,
  `price` int(10) NOT NULL,
  `reasons` varchar(300) NOT NULL,
  `status` varchar(400) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `return/cancels`
--

INSERT INTO `return/cancels` (`id`, `seller_id`, `customer_name`, `order_date`, `price`, `reasons`, `status`) VALUES
(1, 0, 'sehar', '2023-20-22', 2000, 'Product damage', 'returned'),
(2, 0, 'sehar', '2023-20-22', 2000, 'Product damage', 'returned'),
(3, 0, 'hassan', '2023-2-22', 3000, 'Product damage', 'returned');

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
-- AUTO_INCREMENT for table `Notifications`
--
ALTER TABLE `Notifications`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `nursery`
--
ALTER TABLE `nursery`
  MODIFY `id` int(64) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

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
  MODIFY `id` int(64) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

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
