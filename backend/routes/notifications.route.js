const express = require('express');
const app = express();
const notificationRoute = express.Router();

let Notification = require('../models/Notifications');

notificationRoute.route('/create').post((req, res, next) => {
  Notification.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

notificationRoute.route('/read').get((req, res, next) => {
    Notification.updateMany({"read":false}, {"$set":{"read": true}}, (error,data) => {
        if (error) {
          return next(error)
        } else {
          res.json(data)
        }
    });
});

notificationRoute.route('/').get((req, res) => {
    Notification.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});


// Get single employee
// employeeRoute.route('/read/:id').get((req, res) => {
//   Employee.findById(req.params.id, (error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.json(data)
//     }
//   })
// })


// Update employee
// employeeRoute.route('/update/:id').put((req, res, next) => {
//   Employee.findByIdAndUpdate(req.params.id, {
//     $set: req.body
//   }, (error, data) => {
//     if (error) {
//       return next(error);
//       console.log(error)
//     } else {
//       res.json(data)
//       console.log('Data updated successfully')
//     }
//   })
// })

// Delete employee
// employeeRoute.route('/delete/:id').delete((req, res, next) => {
//   Employee.findOneAndRemove(req.params.id, (error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       res.status(200).json({
//         msg: data
//       })
//     }
//   })
// })

module.exports = notificationRoute;