$("[name='goal-length']").bootstrapSwitch();
$("[name='display-goal']").bootstrapSwitch();
$("[name='display-wish']").bootstrapSwitch();
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
$(".billtag").tagsinput({ maxChars: 12 });
$(".budgettag").tagsinput({ maxChars: 12 });
$(".goaltag").tagsinput({ maxChars: 12 });
$(".wishtag").tagsinput({ maxChars: 12 });

$('select').select2({ dropdownCssClass: 'dropdown-inverse', placeholder: "Choose a frequency" });

var datepickerSelector = $('#start-bill');
datepickerSelector.datepicker({
  showOtherMonths: true,
  selectOtherMonths: true,
  dateFormat: 'd MM, yy',
  yearRange: '-1:+1'
}).prev('.input-group-btn').on('click', function (e) {
  e && e.preventDefault();
  datepickerSelector.focus();
});
$.extend($.datepicker, { _checkOffset: function (inst,offset,isFixed) { return offset; } });

// Now let's align datepicker with the prepend button
datepickerSelector.datepicker('widget').css({ 'margin-left': -datepickerSelector.prev('.input-group-btn').find('.btn').outerWidth() + 3 });

var datepickerSelector2 = $('#end-bill');
datepickerSelector2.datepicker({
  showOtherMonths: true,
  selectOtherMonths: true,
  dateFormat: 'd MM, yy',
  yearRange: '-1:+1'
}).prev('.input-group-btn').on('click', function (e) {
  e && e.preventDefault();
  datepickerSelector2.focus();
});
$.extend($.datepicker, { _checkOffset: function (inst,offset,isFixed) { return offset; } });

// Now let's align datepicker with the prepend button
datepickerSelector2.datepicker('widget').css({ 'margin-left': -datepickerSelector2.prev('.input-group-btn').find('.btn').outerWidth() + 3 });

var datepickerSelector3 = $('#start-budget');
datepickerSelector3.datepicker({
  showOtherMonths: true,
  selectOtherMonths: true,
  dateFormat: 'd MM, yy',
  yearRange: '-1:+1'
}).prev('.input-group-btn').on('click', function (e) {
  e && e.preventDefault();
  datepickerSelector3.focus();
});
$.extend($.datepicker, { _checkOffset: function (inst,offset,isFixed) { return offset; } });

// Now let's align datepicker with the prepend button
datepickerSelector3.datepicker('widget').css({ 'margin-left': -datepickerSelector3.prev('.input-group-btn').find('.btn').outerWidth() + 3 });

var datepickerSelector4 = $('#end-budget');
datepickerSelector4.datepicker({
  showOtherMonths: true,
  selectOtherMonths: true,
  dateFormat: 'd MM, yy',
  yearRange: '-1:+1'
}).prev('.input-group-btn').on('click', function (e) {
  e && e.preventDefault();
  datepickerSelector4.focus();
});
$.extend($.datepicker, { _checkOffset: function (inst,offset,isFixed) { return offset; } });

// Now let's align datepicker with the prepend button
datepickerSelector4.datepicker('widget').css({ 'margin-left': -datepickerSelector4.prev('.input-group-btn').find('.btn').outerWidth() + 3 });

var datepickerSelector5 = $('#end-wish');
datepickerSelector5.datepicker({
  showOtherMonths: true,
  selectOtherMonths: true,
  dateFormat: 'd MM, yy',
  yearRange: '-1:+1'
}).prev('.input-group-btn').on('click', function (e) {
  e && e.preventDefault();
  datepickerSelector5.focus();
});
$.extend($.datepicker, { _checkOffset: function (inst,offset,isFixed) { return offset; } });

// Now let's align datepicker with the prepend button
datepickerSelector5.datepicker('widget').css({ 'margin-left': -datepickerSelector5.prev('.input-group-btn').find('.btn').outerWidth() + 3 });
