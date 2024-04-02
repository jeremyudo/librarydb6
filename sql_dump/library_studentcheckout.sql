-- MySQL dump 10.13  Distrib 8.0.36, for macos14 (x86_64)
--
-- Host: library-db.mysql.database.azure.com    Database: library
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `studentcheckout`
--

DROP TABLE IF EXISTS `studentcheckout`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `studentcheckout` (
  `CheckOutID` int NOT NULL AUTO_INCREMENT,
  `StudentID` int NOT NULL,
  `ItemType` enum('Book','Digital Media','Serial Publication') NOT NULL,
  `BookISBN` int unsigned DEFAULT NULL,
  `DigitalCallNum` int DEFAULT NULL,
  `SerialISSN` int unsigned DEFAULT NULL,
  `CheckedOut` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `DueDate` date DEFAULT NULL,
  `CheckInID` int DEFAULT NULL,
  `CheckInDate` date DEFAULT NULL,
  `Overdue` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`CheckOutID`),
  KEY `StudentCheckOut_idx` (`StudentID`),
  KEY `BookCheckOutStu_idx` (`BookISBN`),
  KEY `SerialCheckOutStu_idx` (`SerialISSN`),
  KEY `CheckedInID_idx` (`CheckInID`),
  KEY `DigiCheckOutStu_idx` (`DigitalCallNum`),
  CONSTRAINT `BookCheckOutStu` FOREIGN KEY (`BookISBN`) REFERENCES `books` (`ISBN`),
  CONSTRAINT `DigiCheckOutStu` FOREIGN KEY (`DigitalCallNum`) REFERENCES `digitalmediaitem` (`DigiID`),
  CONSTRAINT `SerialCheckOutStu` FOREIGN KEY (`SerialISSN`) REFERENCES `serialpublication` (`ISSN`),
  CONSTRAINT `StuCheckedInID` FOREIGN KEY (`CheckInID`) REFERENCES `checkin` (`CheckinID`),
  CONSTRAINT `StudentCheckOut` FOREIGN KEY (`StudentID`) REFERENCES `students` (`StudentID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `studentcheckout`
--

LOCK TABLES `studentcheckout` WRITE;
/*!40000 ALTER TABLE `studentcheckout` DISABLE KEYS */;
/*!40000 ALTER TABLE `studentcheckout` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-01 13:09:35
