<template>
    <nav class="navbar">
      <div class="nav-item">
        <div class="notifications">
          <div class="notification-button-container">
          <button class="notification-button" @click="toggleNotifications">
            <i class="ri-notification-line bell-icon"></i>
            <span v-if="count > 0" class="notification-count">{{ formatUnreadCount(count) }}</span>
          </button>
          </div>
          <div v-if="showNotifications" class="notification-list">
            <div v-for="notification in notifications" :key="notification.id" class="notification">
              {{ notification.message }}
            </div>
          </div>
        </div>
         <!-- Welcome Message -->
         <div class="welcome-message">Welcome to real-time notification portal</div>
      </div>
    </nav>
       <!-- buttons to send and the notifications -->
       <div class="post__buttons">
       <button class="send-notification-button" @click="sendNotification">Send Notification</button>
  
  
        <!-- Add a button to reset notifications -->
        <button class="reset-notification-button" @click="resetNotifications">Reset Notifications</button>
      </div>
  </template>
  <script>
  export default {
    data() {
      return {
        showNotifications: false,
        notifications: [],
      };
    },
    props: {
      count: {
        type: Number,
        required: true,
      },
    },
    methods: {
      toggleNotifications() {
        this.showNotifications = !this.showNotifications;
      },
      formatUnreadCount(count) {
        // Function to display the count to "99+" if it exceeds 99 notifications
        return count > 99 ? "99+" : count.toString();
      },
      sendNotification() {
        // Emit a custom event to notify the parent component (App.vue) to handle the notification sending logic
        this.$emit("send-notification");
      },
      resetNotifications() {
        // Emit a custom event to notify the parent component (App.vue) to reset the notification count
        this.$emit("reset-notifications");
      },
    },
    
  };
  </script>
  
  <style scoped>
  
  :root{
    --first-color: hsl(var(--hue), var(--sat), var(--lig));
    --first-color-alt: hsl(var(--hue), var(--sat), 57%);
  }
  .notifications {
    position: relative;
  }
  
  .bell-icon {
    font-size: 24px;
    position: relative;
    
  }
  
  .notification-button {
    background: none;
    border: none;
    position: relative;
  }
  
  .notification-count {
    position: absolute;
    top: -10px;
    right: -5px;
    background-color: red;
    color: purple;
    border-radius: 70%;
    width: 22px;
    height: 22px;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .notification-list {
    position: absolute;
    top: 30px;
    right: 0;
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    padding: 10px;
    width: 200px;
    max-height: 200px;
    overflow-y: auto;
  }
  
  .notification {
    margin-bottom: 10px;
  }
  
  .navbar {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 13px;
    background-color: var(--first-color-alt);
    color: #fff;
    border-radius: 20px;
    box-shadow: 0 2px 5px (0, 0, 0, 0.2);
    position: relative;
    overflow: hidden;
  }
  .nav-item {
    display: flex;
    align-items: center;
  }
  .welcome-message {
    text-align: center;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.8);
    white-space: nowrap; 
  }
  
  .notification-button-container {
  
    display: flex;
    align-items: center;
    position: absolute;
    left: 700px;
    top: 30%;
    transform: translateY(-40%);
    
  }
  .send-notification-button{
    display: inline-flex;
    align-items: center;
    column-gap: .5rem;
    background-color: var(--first-color);
    color: #fff;
    padding: 1.15rem 1.5rem;
    border-radius: .5rem;
    transition: .3s;
    box-shadow: 0 8px 24px hsla(var(--hue),var(--sat), var(--lig),.25);
  }
  .send-notification-button:hover{
    box-shadow: 0 0 5px cyan,
  0 0 25px cyan, 0 0 50px cyan
  }
  .reset-notification-button{
    display: inline-flex;
    align-items: center;
    column-gap: .5rem;
    background-color: var(--first-color);
    color: #fff;
    padding: 1.15rem 1.5rem;
    border-radius: .5rem;
    transition: .3s;
    box-shadow: 0 8px 24px hsla(var(--hue),var(--sat), var(--lig),.25);
  }
  .reset-notification-button:hover{
    box-shadow: 0 0 5px cyan,
  0 0 25px cyan, 0 0 50px cyan
  }
  
  .post__buttons{
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 10%;
  }
  
  </style>