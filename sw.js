self.addEventListener('push', (response) => {
    const obj = response.data.json();
    var options = {
        body: obj.description,
        icon: obj.iconUrl,
        data: {
            url: obj.actionButtonLink
        },
        actions: [
            {
                action: 'navigate', title: obj.actionButtonLabel
            },
            {
                action: 'close', title: 'Close'
            }
        ]
    }
    self.registration.showNotification(obj.title, options);
});

self.addEventListener('notificationclick', function(event) {

    switch(event.action){
      case 'navigate':
        clients.openWindow(event.notification.data.url);
        break;
      case 'any_other_action':
        event.notification.close();
        break;
    }
  }
, false);

self.addEventListener('install', function(event) {
    self.skipWaiting();
});