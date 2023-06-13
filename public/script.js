const socket = io();

// Step 3: Listen for the 'dataUpdate' event
socket.on('dataUpdate', jsonData => {
  const donationData = jsonData[0]; // Assuming the first row contains the donation data

  // Update the webpage elements with the updated data
  document.getElementById('amountDonation').textContent = donationData.Donation;
  document.getElementById('impact').textContent = donationData.Impact;

  // Calculate progress percentage
  const progressPercentage = (donationData.Donation / donationData.Milestone) * 100;
  document.getElementById('progress').style.width = `${progressPercentage}%`;

  // Update Impact relative to Amount Donation
  const impactPercentage = (donationData.Impact / donationData.Donation) * 100;
  document.getElementById('impact').style.fontWeight = 'bold';
  document.getElementById('impact').style.color = 'red';
  document.getElementById('impact').style.fontSize = `${impactPercentage}%`;
});
