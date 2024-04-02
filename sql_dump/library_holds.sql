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
-- Table structure for table `holds`
--

DROP TABLE IF EXISTS `holds`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `holds` (
  `HoldID` int NOT NULL AUTO_INCREMENT,
  `StudentOrFaculty` enum('Student','Faculty') NOT NULL,
  `StudentID` int DEFAULT NULL,
  `FacultyID` int DEFAULT NULL,
  `ItemType` enum('Book','Digital Media','Serial Publication') NOT NULL,
  `BookISBN` int unsigned DEFAULT NULL,
  `DigitalCallNum` int DEFAULT NULL,
  `SerialISSN` int unsigned DEFAULT NULL,
  `Pending` tinyint NOT NULL,
  `HoldPosted` datetime NOT NULL,
  `CheckInDate` date DEFAULT NULL,
  `ExprirationDate` date DEFAULT NULL,
  `HoldResult` enum('Checked Out','Hold Expired','Voided') DEFAULT NULL,
  PRIMARY KEY (`HoldID`),
  KEY `StudentHold_idx` (`StudentID`),
  KEY `BookHold_idx` (`BookISBN`),
  KEY `SerialHold_idx` (`SerialISSN`),
  KEY `FacultyHold_idx` (`FacultyID`),
  KEY `DigiHold_idx` (`DigitalCallNum`),
  CONSTRAINT `BookHold` FOREIGN KEY (`BookISBN`) REFERENCES `books` (`ISBN`),
  CONSTRAINT `DigiHold` FOREIGN KEY (`DigitalCallNum`) REFERENCES `digitalmediaitem` (`DigiID`),
  CONSTRAINT `FacultyHold` FOREIGN KEY (`FacultyID`) REFERENCES `faculty` (`FacultyID`),
  CONSTRAINT `SerialHold` FOREIGN KEY (`SerialISSN`) REFERENCES `serialpublication` (`ISSN`),
  CONSTRAINT `StudentHold` FOREIGN KEY (`StudentID`) REFERENCES `students` (`StudentID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `holds`
--

LOCK TABLES `holds` WRITE;
/*!40000 ALTER TABLE `holds` DISABLE KEYS */;
/*!40000 ALTER TABLE `holds` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-01 13:09:37
