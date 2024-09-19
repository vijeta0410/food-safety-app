# Meat Storage Monitoring System/ Food safety app

## Overview

The **Meat Storage Monitoring System** is an innovative solution that leverages cutting-edge technologies to ensure the hygienic storage of raw meats. By combining **image classification models** (like CNNs), **blockchain technology**, and **e-nose sensors**, the system offers a robust approach to monitoring the quality of meat in storage. The system tracks when meat is stored and consumed, sending real-time alerts to food safety authorities if spoiled or contaminated meat is being used. This helps prevent foodborne illnesses and ensures food safety compliance.

## Problem Statement

Restaurants and food suppliers face challenges in ensuring the proper storage of raw meats. Spoiled meat, if used, can lead to serious foodborne illnesses, compromising public health. There's a lack of automated, transparent systems that can monitor meat storage, track spoilage, and enforce accountability in real time.

## Proposed Solution

This system integrates **machine learning**, **blockchain**, and **sensor-based technology** to address the problem:

- **Image Classification Models**: Convolutional Neural Networks (CNNs) are used to classify meat images, detecting spoilage based on factors like discoloration and texture changes.

- **Blockchain**: Ensures transparency and traceability of meat storage data, from the time it's received to the time it's consumed. Any instance of spoiled meat being consumed triggers an automatic alert to food safety authorities.

- **E-nose Sensors**: Mimicking the human olfactory system, these sensors detect bad odors from meats and provide early warnings of spoilage.

Additionally, **motion detection** captures when meat is stored and consumed, allowing for seamless tracking of inventory, while labeling the product's lifecycle.

## Tech Stack

- **Frontend**: React.js, HTML, CSS

- **Backend**: Node.js, Express.js

- **Blockchain**: Ethereum, Smart Contracts, Web3.js

- **Machine Learning**: Python, TensorFlow/Keras (for CNNs)

- **Database**: MongoDB

- **Sensors**: E-nose for detecting spoilage through odor detection

- **Smart Contracts**: Solidity (for meat tracking and transparency)

## Features

- **Image Classification**: Uses CNN models to analyze meat images for spoilage detection.

- **Blockchain Tracking**: Every meat transaction (storage, consumption) is logged on a decentralized blockchain network.

- **Real-Time Alerts**: If spoiled meat is used, an alert is sent automatically to food safety departments.

- **E-nose Sensors**: Detects volatile organic compounds associated with meat spoilage.

- **Motion Detection**: Automatically tracks the lifecycle of the meat (storage, consumption, spoilage).

## Workflow

1\. **Meat Storage**: When meat is placed in storage, the system captures the date, along with motion detection. An image of the meat is taken and analyzed by a CNN model to determine its quality.

2\. **Monitoring**: E-nose sensors continuously monitor the meat for any foul odors, while images are periodically captured for further analysis.

3\. **Blockchain Logging**: All transactions are recorded on the blockchain, ensuring transparency and traceability of meat storage.

4\. **Consumption**: When the meat is taken out for consumption, the system detects the motion and labels the meat as consumed. Any spoilage detected triggers an alert to the food safety department.

5\. **Alerts and Notifications**: If contaminated or spoiled meat is flagged at any point, real-time alerts are generated, and an automatic report is sent to the regulatory authorities.

## Advantages

- **Transparency and Trust**: Blockchain technology ensures full traceability and accountability in meat storage and usage.

- **Enhanced Food Safety**: Machine learning models and e-nose sensors provide early detection of spoiled meat.

- **Automation**: Automatically tracks the lifecycle of meat, from storage to consumption.

- **Real-Time Monitoring**: E-nose sensors and image classification ensure the meat's quality is always under surveillance.

- **Scalability**: The system can be easily integrated into any restaurant or food storage supply chain.

## Installation

1\. Clone the repository:

   ```
   git clone https://github.com/your-username/meat-storage-monitoring.git
   cd meat-storage-monitoring```

   
Here's a comprehensive GitHub `README.md` file for your meat monitoring project:

markdown

Copy code

`# Meat Storage Monitoring System

## Overview
The **Meat Storage Monitoring System** is an innovative solution that leverages cutting-edge technologies to ensure the hygienic storage of raw meats. By combining **image classification models** (like CNNs), **blockchain technology**, and **e-nose sensors**, the system offers a robust approach to monitoring the quality of meat in storage. The system tracks when meat is stored and consumed, sending real-time alerts to food safety authorities if spoiled or contaminated meat is being used. This helps prevent foodborne illnesses and ensures food safety compliance.

## Problem Statement
Restaurants and food suppliers face challenges in ensuring the proper storage of raw meats. Spoiled meat, if used, can lead to serious foodborne illnesses, compromising public health. There's a lack of automated, transparent systems that can monitor meat storage, track spoilage, and enforce accountability in real time.

## Proposed Solution
This system integrates **machine learning**, **blockchain**, and **sensor-based technology** to address the problem:
- **Image Classification Models**: Convolutional Neural Networks (CNNs) are used to classify meat images, detecting spoilage based on factors like discoloration and texture changes.
- **Blockchain**: Ensures transparency and traceability of meat storage data, from the time it's received to the time it's consumed. Any instance of spoiled meat being consumed triggers an automatic alert to food safety authorities.
- **E-nose Sensors**: Mimicking the human olfactory system, these sensors detect bad odors from meats and provide early warnings of spoilage.

Additionally, **motion detection** captures when meat is stored and consumed, allowing for seamless tracking of inventory, while labeling the product's lifecycle.

## Tech Stack
- **Frontend**: React.js, HTML, CSS
- **Backend**: Node.js, Express.js
- **Blockchain**: Ethereum, Smart Contracts, Web3.js
- **Machine Learning**: Python, TensorFlow/Keras (for CNNs)
- **Database**: MongoDB
- **Sensors**: E-nose for detecting spoilage through odor detection
- **Smart Contracts**: Solidity (for meat tracking and transparency)

## Features
- **Image Classification**: Uses CNN models to analyze meat images for spoilage detection.
- **Blockchain Tracking**: Every meat transaction (storage, consumption) is logged on a decentralized blockchain network.
- **Real-Time Alerts**: If spoiled meat is used, an alert is sent automatically to food safety departments.
- **E-nose Sensors**: Detects volatile organic compounds associated with meat spoilage.
- **Motion Detection**: Automatically tracks the lifecycle of the meat (storage, consumption, spoilage).

## Workflow
1. **Meat Storage**: When meat is placed in storage, the system captures the date, along with motion detection. An image of the meat is taken and analyzed by a CNN model to determine its quality.
2. **Monitoring**: E-nose sensors continuously monitor the meat for any foul odors, while images are periodically captured for further analysis.
3. **Blockchain Logging**: All transactions are recorded on the blockchain, ensuring transparency and traceability of meat storage.
4. **Consumption**: When the meat is taken out for consumption, the system detects the motion and labels the meat as consumed. Any spoilage detected triggers an alert to the food safety department.
5. **Alerts and Notifications**: If contaminated or spoiled meat is flagged at any point, real-time alerts are generated, and an automatic report is sent to the regulatory authorities.

## Advantages
- **Transparency and Trust**: Blockchain technology ensures full traceability and accountability in meat storage and usage.
- **Enhanced Food Safety**: Machine learning models and e-nose sensors provide early detection of spoiled meat.
- **Automation**: Automatically tracks the lifecycle of meat, from storage to consumption.
- **Real-Time Monitoring**: E-nose sensors and image classification ensure the meat's quality is always under surveillance.
- **Scalability**: The system can be easily integrated into any restaurant or food storage supply chain.

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/vijeta0410/food-safety-app.git
   cd meat-storage-monitoring
   ```

1.  Install dependencies:

    `npm install`

2.  Start the local blockchain (using Ganache or any Ethereum local blockchain service):

    `ganache-cli`

3.  Compile and deploy the smart contracts:

    `truffle compile
    truffle migrate`

4.  Start the backend server:

    `npm run start`

5.  Start the frontend:

    bash

    Copy code

    `cd client
    npm start`

Usage
-----

-   Upload meat images via the frontend dashboard.
-   Monitor real-time data for meat spoilage and alerts on the frontend interface.
-   View blockchain-logged data for transparency and traceability.

Contributing
------------
Feel free to fork this project and contribute by submitting a pull request or opening an issue.
