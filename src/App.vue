<template>
  
    <nav>
      <div class="nav-item">
          <!-- Binding the custom event to the sendNotification and resetnotification method -->
          <notifications :count="unreadCount" @send-notification="sendNotification" @reset-notifications="resetNotifications" />
      </div>
    </nav>
  
</template>
<script>
import Notifications from "@/components/NotificationsComponent.vue";
import axios from "axios";
import * as signalR from "@microsoft/signalr";

export default {
  name: "App",
  components: {
    Notifications,
  },
  data() {
    return {
      connection: null,
      unreadCount: 0,
    };
  },
  methods: {
    initSignalR() {
      this.connection = new signalR.HubConnectionBuilder()
        .withUrl("https://claysys.azurewebsites.net/notificationsHub", {
          skipNegotiation: true,
          transport: signalR.HttpTransportType.WebSockets,
        }) 
        .configureLogging(signalR.LogLevel.Information)
        .build();

         // Event handler for "ReceiveNotification" inside the initSignalR method
         this.connection.on("ReceiveNotification", () => {
        console.log("Received new notification.");
        this.unreadCount++; 
      });

      this.connection
        .start()
        .then(() => {
          console.log("SignalR connection established.");
        })
        .catch((err) => {
          console.error("Error while establishing SignalR connection:", err);
        });
        
    },
    async fetchUnreadCount() {
      try {
        const response = await axios.get("https://claysys.azurewebsites.net/api/notifications/unread"); 
        this.unreadCount = response.data.unreadCount;
      } catch (error) {
        console.error("Error while fetching unread notification count:", error);
      }
    },
    formatUnreadCount(count) {
      
      return count > 99 ? "99+" : count.toString();
    },

    async sendNotification() {
      try {
        await axios.post("https://claysys.azurewebsites.net/api/notifications/send");
        this.fetchUnreadCount();
      } catch (error) {
        console.error("Error while sending notification:", error);
      }
    },
     async resetNotifications() {
      try {
        await axios.post("https://claysys.azurewebsites.net/api/notifications/reset");
        this.fetchUnreadCount();
      } catch (error) {
        console.error("Error while resetting notifications:", error);
      }
    },
  },
  created() {
    this.fetchUnreadCount();
    this.initSignalR();
  },
   
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>