package com.example.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "events")
@Data
@AllArgsConstructor
@NoArgsConstructor

public class Event {
    @Id
    private String id;
    private String title;
    private String description;
    private String category;
    private boolean isOngoing;
    private int estimatedAffectedPeople;
    private String severity;
    private String location;
    private String startDate;
    private String endDate;
    private String coverImage;
    private String urgencyLevel;
    private int fundingGoal;
    private int currentFunding;

    // Getters and Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public boolean isOngoing() { return isOngoing; }
    public void setOngoing(boolean ongoing) { isOngoing = ongoing; }

    public int getEstimatedAffectedPeople() { return estimatedAffectedPeople; }
    public void setEstimatedAffectedPeople(int estimatedAffectedPeople) { this.estimatedAffectedPeople = estimatedAffectedPeople; }

    public String getSeverity() { return severity; }
    public void setSeverity(String severity) { this.severity = severity; }

    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }

    public String getStartDate() { return startDate; }
    public void setStartDate(String startDate) { this.startDate = startDate; }

    public String getEndDate() { return endDate; }
    public void setEndDate(String endDate) { this.endDate = endDate; }

    public String getCoverImage() { return coverImage; }
    public void setCoverImage(String coverImage) { this.coverImage = coverImage; }

    public String getUrgencyLevel() { return urgencyLevel; }
    public void setUrgencyLevel(String urgencyLevel) { this.urgencyLevel = urgencyLevel; }

    public int getFundingGoal() { return fundingGoal; }
    public void setFundingGoal(int fundingGoal) { this.fundingGoal = fundingGoal; }

    public int getCurrentFunding() { return currentFunding; }
    public void setCurrentFunding(int currentFunding) { this.currentFunding = currentFunding; }
}
