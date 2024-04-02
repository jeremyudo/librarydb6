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
-- Table structure for table `fines`
--

DROP TABLE IF EXISTS `fines`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fines` (
  `FineID` int NOT NULL AUTO_INCREMENT,
  `StudentOrFaculty` enum('Student','Faculty') NOT NULL,
  `StudentID` int DEFAULT NULL,
  `FacultyID` int DEFAULT NULL,
  `TypeOfFine` enum('Late','Damaged','Lost') NOT NULL,
  `FineAmount` decimal(10,2) NOT NULL,
  `FineDate` date NOT NULL,
  `FineConsideredLost` date DEFAULT NULL,
  `PaymentStatus` enum('Paid','Unpaid') NOT NULL,
  `PaymentDate` datetime DEFAULT NULL,
  `Notes` text,
  `CreatedDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `UpdatedDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `StudentCheckout` int DEFAULT NULL,
  `FacultyCheckout` int DEFAULT NULL,
  `StudentCheckoutID` int DEFAULT NULL,
  `FacultyCheckoutID` int DEFAULT NULL,
  PRIMARY KEY (`FineID`),
  UNIQUE KEY `StudentCheckout_UNIQUE` (`StudentCheckout`),
  UNIQUE KEY `FacultyCheckout_UNIQUE` (`FacultyCheckout`),
  UNIQUE KEY `StudentCheckoutID_UNIQUE` (`StudentCheckoutID`),
  UNIQUE KEY `FacultyCheckoutID_UNIQUE` (`FacultyCheckoutID`),
  KEY `fines_ibfk_3_idx` (`FacultyID`),
  KEY `fines_ibfk_2` (`StudentID`),
  CONSTRAINT `facultyCheckoutForFine` FOREIGN KEY (`FacultyCheckout`) REFERENCES `facultycheckout` (`CheckOutID`),
  CONSTRAINT `fines_ibfk_2` FOREIGN KEY (`StudentID`) REFERENCES `students` (`StudentID`),
  CONSTRAINT `fines_ibfk_3` FOREIGN KEY (`FacultyID`) REFERENCES `faculty` (`FacultyID`),
  CONSTRAINT `studentCheckoutForFine` FOREIGN KEY (`StudentCheckout`) REFERENCES `studentcheckout` (`CheckOutID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fines`
--

LOCK TABLES `fines` WRITE;
/*!40000 ALTER TABLE `fines` DISABLE KEYS */;
/*!40000 ALTER TABLE `fines` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-01 13:09:32
