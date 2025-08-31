# Use an official OpenJDK runtime as a parent image
FROM eclipse-temurin:21-jdk

# Set the working directory
WORKDIR /app

# Copy the Maven wrapper and project files
COPY . .

# Build the application
RUN ./mvnw clean package -DskipTests

# Run the Spring Boot app
CMD ["java", "-jar", "target/AidLink-0.0.1-SNAPSHOT.jar"]
