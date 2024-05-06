const menuData = {
  Monday: {Breakfast: 'Breakfast Bowl', Lunch: 'Pizza', Dinner: 'Nachos'},
  Tuesday: {Breakfast: 'Breakfast Burrito', Lunch: 'Classic Burger', Dinner: 'Chicken Tenders'},
  Wednesday: {Breakfast: 'Sausage Biscuit', Lunch: 'Chicken Tenders', Dinner: 'Nachos'},
  Thursday: {Breakfast: 'French Toast Sticks', Lunch: 'Nachos', Dinner: 'Pizza'},
  Friday: {Breakfast: 'Breakfast Bowl', Lunch: 'Pizza', Dinner: 'Classic Burger'}
};

// Function to update the menu based on selected day
function updateMenu() {
  const selectedDay = document.getElementById('day').value;
  const menuElement = document.getElementById('menu');
  

  const selectedMenu = menuData[selectedDay];

  menuElement.innerHTML = '';

  for (const meal in selectedMenu) {
    const menuItem = document.createElement('ul');
    menuItem.textContent = `${meal}: ${selectedMenu[meal]}`;
    menuElement.appendChild(menuItem);
  }
}

document.addEventListener('DOMContentLoaded', updateMenu);
document.getElementById('day').addEventListener('change', updateMenu);
