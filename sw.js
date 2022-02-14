self.addEventListener('push', (response) => {
    const obj = response.data.json();
    var options = {
        body: obj.description,
        icon: obj.iconUrl,
        data: {
            url: obj.actionButtonLink
        }
    }
    self.registration.showNotification(obj.title, options);
});

self.addEventListener('notificationclick', function(event) {
    clients.openWindow(event.notification.data.url);
  }
, false);

self.addEventListener('install', function(event) {
    self.skipWaiting();
});