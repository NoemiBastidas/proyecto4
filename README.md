//INICIAR PROYECTO CLIENT
 cd client
 npm install
 ng serve -o  (LEVANTA EL LOCALHOST)

 


 //INICIAR PROYECTO SERVER
 cd server
 composer install  
 php artisan serve  (LEVANTA EL SERVIDOR)


 //REALIZAR LAS MIGRACIONES
 **php artisan migrate  // comondo de migraciones por primera vez
 **php artisan migrate:fresh  //este comando es para cuando se quiere borrarlla migración anterior y volve a cargar la nueva migración
**php artisan make:migration create_sensors_table //crear nueva tabla
** php artisan make:model Actuator  //crear modelos
** php artisan make:controller ActuatorController --resource // crear controladores