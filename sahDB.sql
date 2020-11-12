-- MySQL dump 10.16  Distrib 10.1.47-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: sahDB
-- ------------------------------------------------------
-- Server version	10.1.47-MariaDB-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `sah_authority_details`
--

DROP TABLE IF EXISTS `sah_authority_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sah_authority_details` (
  `sl_no` varchar(50) NOT NULL,
  `hod_id` varchar(50) DEFAULT NULL,
  `hod_name` varchar(50) DEFAULT NULL,
  `hod_dept` varchar(50) DEFAULT NULL,
  `hoc_id` varchar(50) DEFAULT NULL,
  `hoc_name` varchar(50) DEFAULT NULL,
  `hoc_dept` varchar(50) DEFAULT NULL,
  `adean_cm_id` varchar(50) DEFAULT NULL,
  `adean_cm_name` varchar(50) DEFAULT NULL,
  `adean_cm_dept` varchar(50) DEFAULT NULL,
  `dydt_id` varchar(50) DEFAULT NULL,
  `dydt_name` varchar(50) DEFAULT NULL,
  `dydt_dept` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`sl_no`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sah_authority_details`
--

LOCK TABLES `sah_authority_details` WRITE;
/*!40000 ALTER TABLE `sah_authority_details` DISABLE KEYS */;
INSERT INTO `sah_authority_details` VALUES ('SAH002ffe23c252ca5b6a5d633ef01ae9af','','','','','','','','','','','',''),('SAH003528d0b61b0102f20ebe4ec8a56639','','','','','','','','','','','',''),('SAH00578ecaf45ce62c104cdd2a2541d0a5','789','','','','','','','','','','',''),('SAH0058611ff62505243d586d1d7e9261ee','871','','','','','','','','','','',''),('SAHffc88de8abc842313c436521613709be','','','','','','','','','','','','');
/*!40000 ALTER TABLE `sah_authority_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sah_booking_details`
--

DROP TABLE IF EXISTS `sah_booking_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sah_booking_details` (
  `room_id` int(11) NOT NULL,
  `app_num` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sah_booking_details`
--

LOCK TABLES `sah_booking_details` WRITE;
/*!40000 ALTER TABLE `sah_booking_details` DISABLE KEYS */;
INSERT INTO `sah_booking_details` VALUES (52,'SAHfa3819be540d524730ff69ca6f51da5f'),(53,'SAH229e26e0d9eeec617ce17c8f93d928b4'),(54,'SAH229e26e0d9eeec617ce17c8f93d928b4'),(55,'SAH229e26e0d9eeec617ce17c8f93d928b4'),(74,'SAH251cd177f6726d737f8017503322943c'),(91,'SAH4237f5de69e8cb1c617281d9ebaae1d7');
/*!40000 ALTER TABLE `sah_booking_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sah_default_setup`
--

DROP TABLE IF EXISTS `sah_default_setup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sah_default_setup` (
  `start_date` datetime NOT NULL,
  `end_date` datetime NOT NULL,
  `status` varchar(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sah_default_setup`
--

LOCK TABLES `sah_default_setup` WRITE;
/*!40000 ALTER TABLE `sah_default_setup` DISABLE KEYS */;
INSERT INTO `sah_default_setup` VALUES ('2018-07-11 00:00:00','2018-07-13 00:00:00','1');
/*!40000 ALTER TABLE `sah_default_setup` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sah_guest_details`
--

DROP TABLE IF EXISTS `sah_guest_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sah_guest_details` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app_num` varchar(50) NOT NULL,
  `name` varchar(100) NOT NULL,
  `organisation` varchar(50) NOT NULL,
  `address` varchar(100) NOT NULL DEFAULT 'null',
  `gender` char(1) NOT NULL DEFAULT 'n',
  `contact` varchar(20) NOT NULL,
  `email` varchar(150) NOT NULL,
  `group_count` int(2) NOT NULL,
  `room_alloted` varchar(100) NOT NULL DEFAULT 'Pending',
  `check_in` datetime NOT NULL,
  `check_out` datetime DEFAULT NULL,
  `identity_card` varchar(150) DEFAULT 'Null',
  `typeid` varchar(100) NOT NULL,
  `idcardno` varchar(100) NOT NULL,
  `paid` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sah_guest_details`
--

LOCK TABLES `sah_guest_details` WRITE;
/*!40000 ALTER TABLE `sah_guest_details` DISABLE KEYS */;
INSERT INTO `sah_guest_details` VALUES (5,'SAH6a54e7b941748dc0f017ac0bf3c37eb0','Mr. xx','Businessman','Surat Ganj, Ward No- 15, Madhubani, Bihar','m','983000000','ay2@gmail.com',1,'Pending','2018-09-07 09:51:23','2018-09-07 20:58:26','Null','','',NULL),(6,'SAH2494d470a744ac9d087c76349f1d85e9','Mr yy','IRS, ONGC','Ahmedabad','m','94983000000','x@gc.co.in',1,'Pending','2018-09-07 10:06:08','2018-10-24 12:47:42','Null','','',NULL),(7,'SAH4baa01bff32aad1653075e92bd30a780','Prof. xcvv','NLDIMSR Mumbai','Mumbai','m','940000000','a@gmail.com',1,'Pending','2018-10-24 13:06:15','2018-12-24 16:35:06','Null','','',NULL);
/*!40000 ALTER TABLE `sah_guest_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sah_guest_rooms`
--

DROP TABLE IF EXISTS `sah_guest_rooms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sah_guest_rooms` (
  `guest_id` int(11) DEFAULT NULL,
  `room_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sah_guest_rooms`
--

LOCK TABLES `sah_guest_rooms` WRITE;
/*!40000 ALTER TABLE `sah_guest_rooms` DISABLE KEYS */;
INSERT INTO `sah_guest_rooms` VALUES (5,60),(6,78),(7,88);
/*!40000 ALTER TABLE `sah_guest_rooms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sah_registration_details`
--

DROP TABLE IF EXISTS `sah_registration_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sah_registration_details` (
  `app_num` varchar(50) NOT NULL,
  `app_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user_id` varchar(11) NOT NULL,
  `purpose` varchar(20) DEFAULT NULL,
  `purpose_of_visit` varchar(500) NOT NULL,
  `name` varchar(100) NOT NULL,
  `organisation` varchar(100) NOT NULL,
  `address` varchar(100) NOT NULL,
  `nationality` varchar(50) NOT NULL,
  `contact` varchar(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `age` int(3) NOT NULL,
  `relationship` varchar(50) NOT NULL,
  `check_in` datetime NOT NULL,
  `check_out` datetime NOT NULL,
  `no_of_guests` int(2) NOT NULL,
  `single_AC` int(2) NOT NULL,
  `double_AC` int(2) NOT NULL,
  `suite_AC` int(2) NOT NULL,
  `tariff` int(11) NOT NULL,
  `lodging_with_food` char(1) NOT NULL DEFAULT '0',
  `visitor_category` varchar(3) NOT NULL,
  `file_path` varchar(200) DEFAULT NULL,
  `oic_file_path` varchar(200) DEFAULT NULL,
  `hod_status` varchar(20) DEFAULT NULL,
  `hod_action_timestamp` datetime DEFAULT NULL,
  `dsw_status` varchar(20) DEFAULT NULL,
  `dsw_action_timestamp` datetime DEFAULT NULL,
  `oic_allotment_status` varchar(20) DEFAULT NULL,
  `oic_action_timestamp` datetime DEFAULT NULL,
  `adcm_status` varchar(20) DEFAULT NULL,
  `adcm_action_timestamp` datetime DEFAULT NULL,
  `ddt_status` varchar(20) DEFAULT NULL,
  `ddt_action_timestamp` datetime DEFAULT NULL,
  `deny_reason` varchar(500) DEFAULT NULL,
  `allocation_confirm_status` tinyint(1) DEFAULT NULL,
  `cancellation_date` datetime DEFAULT NULL,
  `Remark` varchar(256) DEFAULT NULL,
  `lodging` varchar(50) NOT NULL DEFAULT 'NA',
  `food` varchar(50) NOT NULL DEFAULT 'NA',
  `lodging_project_no` varchar(50) NOT NULL DEFAULT 'NA',
  `food_project_no` varchar(50) NOT NULL DEFAULT 'NA',
  `select_action` varchar(11) NOT NULL DEFAULT 'est_ar',
  PRIMARY KEY (`app_num`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sah_registration_details`
--

LOCK TABLES `sah_registration_details` WRITE;
/*!40000 ALTER TABLE `sah_registration_details` DISABLE KEYS */;
INSERT INTO `sah_registration_details` VALUES ('SAH00148b0b0651907067abbf8f0181f50f','2018-12-04 15:44:52','18JExxxx','personal','for meeting the son','AK Singh','','W-88, Sector-12,Noida,U.P. (201301)','Indian','980000000','i@asoft.co.in',45,'Father','2018-12-31 06:00:00','2019-01-01 21:30:00',2,0,1,0,1,'1','Ca',NULL,'','Pending',NULL,'Pending',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,NULL,'','visitor','visitor','','','est_ar'),('SAH002ffe23c252ca5b6a5d633ef01ae9af','2020-01-04 16:26:27','1042','personal','MEDICAL/ FOR OWN OFFICIAL WORK','XYX CHATTOPADHYAY','Retired Professor of Department of Applied Mathematics, IIT (ISM) Dhanbad','Department of Applied Mathematics, Science Block, Indian Institute of Technology (Indian School of M','India','980000000','amares.c@gmail.com',0,'0','2020-01-21 09:00:00','2020-01-23 21:00:00',2,0,1,0,3,'1','Ca',NULL,'','Pending',NULL,'Pending',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,NULL,'','visitor','visitor','','','est_ar'),('SAHffc88de8abc842313c436521613709be','2020-01-28 06:56:43','908','personal','Personal for PhD semester registration','Pxccccc','CIMFR Nagpur','CIMFR Nagpur, Maharastra','Indian','980000000','an@iitism.ac.in',0,'0','2020-01-28 12:30:00','2020-01-30 20:00:00',1,0,1,0,3,'1','D',NULL,NULL,NULL,NULL,NULL,NULL,'Approved','2020-01-28 13:10:51','Approved','2020-01-28 23:31:50',NULL,NULL,'NULL',NULL,NULL,NULL,'visitor','visitor','','','adadmin');
/*!40000 ALTER TABLE `sah_registration_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sah_room_details`
--

DROP TABLE IF EXISTS `sah_room_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sah_room_details` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `building` varchar(15) NOT NULL,
  `floor` varchar(15) NOT NULL,
  `room_no` int(5) NOT NULL,
  `room_type` varchar(30) NOT NULL,
  `checked` int(11) NOT NULL DEFAULT '0',
  `blocked` varchar(1) NOT NULL DEFAULT '0',
  `remark` varchar(50) DEFAULT NULL,
  `maxchecked` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=135 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sah_room_details`
--

LOCK TABLES `sah_room_details` WRITE;
/*!40000 ALTER TABLE `sah_room_details` DISABLE KEYS */;
INSERT INTO `sah_room_details` VALUES (52,'block_a','ground',1,'Double Bedded AC',0,'','',0),(53,'block_a','ground',2,'Double Bedded AC',0,'','',0),(54,'block_a','ground',3,'Double Bedded AC',0,'','',0),(55,'block_a','ground',4,'Double Bedded AC',0,'0','Double Bed',0),(56,'block_a','ground',5,'Double Bedded AC',0,'0','Double Bed',0),(57,'block_a','ground',6,'Double Bedded AC',0,'0','Double Bed',0),(58,'block_a','1',18,'Double Bedded AC',0,'','',0),(59,'block_a','1',19,'Double Bedded AC',0,'','',0),(60,'block_a','1',20,'Double Bedded AC',0,'0','Double Bed',0),(61,'block_a','2',28,'Double Bedded AC',0,'0','Double Bed',0),(62,'block_a','2',29,'Double Bedded AC',0,'0','Double Bed',0),(63,'block_a','1',12,'AC Suite',0,'','',0),(64,'block_a','1',14,'AC Suite',0,'','',0),(65,'block_a','1',16,'AC Suite',0,'','',0),(66,'block_a','2',21,'AC Suite',0,'0','Suite room',0),(68,'block_a','2',25,'AC Suite',0,'0','Suite room',0),(69,'block_b','ground',1,'AC Suite',0,'','',0),(70,'block_b','ground',2,'AC Suite',0,'','',0),(71,'block_b','1',3,'AC Suite',0,'','',0),(73,'block_b','ground',1,'Double Bedded AC',0,'0','Double Bed',0),(74,'block_b','1',2,'Double Bedded AC',0,'0','Double Bed',0),(75,'block_b','1',3,'Double Bedded AC',0,'0','Double Bed',0),(76,'block_b','1',4,'Double Bedded AC',0,'','',0),(78,'block_b','1',5,'Double Bedded AC',0,'','',0),(87,'block_b','2',6,'Double Bedded AC',0,'','',0),(88,'block_b','2',11,'Double Bedded AC',0,'','',1),(89,'block_b','2',10,'Double Bedded AC',0,'','',0),(90,'block_b','2',9,'Double Bedded AC',0,'','',0),(91,'block_b','2',8,'Double Bedded AC',0,'','',0),(92,'block_b','2',7,'Double Bedded AC',0,'','',0),(93,'block_b','3',12,'Double Bedded AC',0,'','',0),(94,'block_b','3',15,'Double Bedded AC',0,'','',0),(95,'block_b','3',14,'Double Bedded AC',0,'','',0),(96,'block_b','3',13,'Double Bedded AC',0,'','',0),(97,'block_b','3',4,'AC Suite',0,'','',0),(98,'block_a','ground',3,'room',0,'0','room',0),(111,'block_b','EDC NB Ground',1,'AC Suite',0,'0','EDC',0),(112,'block_b','EDC NB Ground',2,'AC Suite',0,'0','EDC',0),(114,'block_b','EDC NB Ground',3,'AC Suite',0,'0','EDC',0),(115,'block_b','EDC NB Ground',4,'AC Suite',0,'0','EDC',0),(116,'block_b','EDC NB Ground',6,'AC Suite',0,'0','EDC',0),(117,'block_b','EDC NB Ground',7,'AC Suite',0,'0','EDC',0),(118,'block_b','EDC NB First',8,'AC Suite',0,'0','EDC',0),(119,'block_b','EDC NB First',9,'AC Suite',0,'0','EDC',0),(120,'block_b','EDC NB First',10,'AC Suite',0,'0','EDC',0),(121,'block_b','EDC NB First',11,'AC Suite',0,'0','EDC',0),(123,'block_b','EDC NB First',2,'Double Bedded AC',0,'0','EDC',0),(124,'block_b','EDC NB First',3,'Double Bedded AC',0,'0','EDC',0),(125,'block_b','EDC NB First',4,'Double Bedded AC',0,'0','EDC',0),(126,'block_b','EDC NB First',5,'Double Bedded AC',0,'0','EDC',0),(127,'block_b','EDC NB First',6,'Double Bedded AC',0,'0','EDC',0),(128,'block_b','EDC NB First',7,'Double Bedded AC',0,'0','EDC',0),(129,'block_b','EDC NB First',8,'Double Bedded AC',0,'0','EDC',0),(130,'block_b','EDC NB First',9,'Double Bedded AC',0,'0','EDC',0),(131,'block_b','EDC NB First',10,'Double Bedded AC',0,'0','EDC',0),(132,'block_b','EDC NB First',11,'Double Bedded AC',0,'0','EDC',0),(134,'block','0',23,'abssdf',0,'1','EDC',0);
/*!40000 ALTER TABLE `sah_room_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sah_tariff`
--

DROP TABLE IF EXISTS `sah_tariff`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sah_tariff` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `ac_suite` int(10) NOT NULL,
  `ac_suite_conc` int(10) NOT NULL,
  `double_single` int(10) NOT NULL,
  `double_single_conc` int(10) NOT NULL,
  `double_double` int(10) NOT NULL,
  `double_double_conc` int(10) NOT NULL,
  `cgst` float NOT NULL DEFAULT '0',
  `sgst` float NOT NULL DEFAULT '0',
  `wef` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sah_tariff`
--

LOCK TABLES `sah_tariff` WRITE;
/*!40000 ALTER TABLE `sah_tariff` DISABLE KEYS */;
INSERT INTO `sah_tariff` VALUES (1,1200,800,800,400,800,600,6,6,'2018-07-09 16:47:27'),(2,12,800,0,0,0,0,6,6,'2019-06-03 17:30:00'),(3,1500,950,0,0,1000,600,6,6,'2019-09-17 18:30:00'),(4,2000,950,0,0,1200,600,6,6,'2019-09-17 18:30:00'),(8,1000,1000,1000,1000,1000,1000,9,9,'2020-10-31 14:20:13'),(9,1000,1000,1000,1000,1000,1000,9,9,'2020-10-31 14:45:46'),(10,1000,0,1000,1000,1000,1000,9,9,'2020-10-31 14:54:23');
/*!40000 ALTER TABLE `sah_tariff` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-11-12 17:30:11
