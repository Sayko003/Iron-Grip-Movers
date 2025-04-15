import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

const dataForm = function(){
    const inputData = document.querySelector(`#form #date`);
    new AirDatepicker(inputData, {
        selectedDates: new Date(),
        autoClose: true,
        dateFormat: 'dd-MM-yyyy',
        minDate: new Date(),
        locale: {
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            today: "Today",
            clear: "Clear",
            firstDay: 0
        },
        onSelect({date, formattedDate, datepicker}){
            inputData.value = `${formattedDate}`;
        },
        
    })
    
}

export default dataForm;