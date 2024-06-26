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
-- Table structure for table `checkin`
--

DROP TABLE IF EXISTS `checkin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `checkin` (
  `CheckinID` int NOT NULL AUTO_INCREMENT,
  `StudentOrFaculty` enum('Student','Faculty') NOT NULL,
  `StudentID` int DEFAULT NULL,
  `StudentCheckedOutID` int DEFAULT NULL,
  `FacultyID` int DEFAULT NULL,
  `FacultyCheckOutID` int DEFAULT NULL,
  `ItemType` enum('Book','Digital Media','Serial Publication') NOT NULL,
  `BookISBN` int unsigned DEFAULT NULL,
  `DigitalCallNum` int DEFAULT NULL,
  `SerialISSN` int unsigned DEFAULT NULL,
  `CheckInTime` datetime NOT NULL,
  PRIMARY KEY (`CheckinID`),
  KEY `StudentCheckin_idx` (`StudentID`),
  KEY `BookCheckin_idx` (`BookISBN`),
  KEY `SerialCheckin_idx` (`SerialISSN`),
  KEY `FacultyCheckin_idx` (`FacultyID`),
  KEY `StuCheckedOutID_idx` (`StudentCheckedOutID`),
  KEY `FacCheckedOutID` (`FacultyCheckOutID`),
  KEY `DigiCheckin_idx` (`DigitalCallNum`),
  CONSTRAINT `BookCheckin` FOREIGN KEY (`BookISBN`) REFERENCES `books` (`ISBN`),
  CONSTRAINT `DigiCheckin` FOREIGN KEY (`DigitalCallNum`) REFERENCES `digitalmediaitem` (`DigiID`),
  CONSTRAINT `FacCheckedOutID` FOREIGN KEY (`FacultyCheckOutID`) REFERENCES `facultycheckout` (`CheckOutID`),
  CONSTRAINT `FacultyCheckin` FOREIGN KEY (`FacultyID`) REFERENCES `faculty` (`FacultyID`),
  CONSTRAINT `SerialCheckin` FOREIGN KEY (`SerialISSN`) REFERENCES `serialpublication` (`ISSN`),
  CONSTRAINT `StuCheckedOutID` FOREIGN KEY (`StudentCheckedOutID`) REFERENCES `studentcheckout` (`CheckOutID`),
  CONSTRAINT `StudentCheckin` FOREIGN KEY (`StudentID`) REFERENCES `students` (`StudentID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `checkin`
--

LOCK TABLES `checkin` WRITE;
/*!40000 ALTER TABLE `checkin` DISABLE KEYS */;
/*!40000 ALTER TABLE `checkin` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-01 13:09:31
