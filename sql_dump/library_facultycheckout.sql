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
-- Table structure for table `facultycheckout`
--

DROP TABLE IF EXISTS `facultycheckout`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `facultycheckout` (
  `CheckOutID` int NOT NULL AUTO_INCREMENT,
  `FacultyID` int NOT NULL,
  `ItemType` enum('Book','Digital Media','Serial Publication') NOT NULL,
  `BookISBN` int unsigned DEFAULT NULL,
  `DigitalCallNum` int DEFAULT NULL,
  `SerialISSN` int unsigned DEFAULT NULL,
  `CheckedOut` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `DueDate` date NOT NULL,
  `CheckInID` int DEFAULT NULL,
  `CheckInDate` date DEFAULT NULL,
  `Overdue` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`CheckOutID`),
  KEY `FacultyCheckOut_idx` (`FacultyID`),
  KEY `BookCheckOut_idx` (`BookISBN`),
  KEY `SerialCheckOut_idx` (`SerialISSN`),
  KEY `CcheckInID_idx` (`CheckInID`),
  KEY `DigiCheckOut_idx` (`DigitalCallNum`),
  CONSTRAINT `BookCheckOut` FOREIGN KEY (`BookISBN`) REFERENCES `books` (`ISBN`),
  CONSTRAINT `DigiCheckOut` FOREIGN KEY (`DigitalCallNum`) REFERENCES `digitalmediaitem` (`DigiID`),
  CONSTRAINT `FacCheckedInID` FOREIGN KEY (`CheckInID`) REFERENCES `checkin` (`CheckinID`),
  CONSTRAINT `FacultyCheckOut` FOREIGN KEY (`FacultyID`) REFERENCES `faculty` (`FacultyID`),
  CONSTRAINT `SerialCheckOut` FOREIGN KEY (`SerialISSN`) REFERENCES `serialpublication` (`ISSN`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `facultycheckout`
--

LOCK TABLES `facultycheckout` WRITE;
/*!40000 ALTER TABLE `facultycheckout` DISABLE KEYS */;
/*!40000 ALTER TABLE `facultycheckout` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-01 13:09:34
