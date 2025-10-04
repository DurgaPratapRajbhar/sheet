const mongoose = require('mongoose');

const rsiCheckSheetSchema = new mongoose.Schema({
  // Rectifier Block (RSI)
  rsi1_visual_check: String,
  rsi2_visual_check: String,
  rsi1_hv_test: String,
  rsi2_hv_test: String,
  rsi1_torque: String,
  rsi2_torque: String,
  rsi1_voltage_arm: String,
  rsi2_voltage_arm: String,
  rsi1_output: String,
  rsi2_output: String,
  rsi1_fuse_ngef: String,
  rsi2_fuse_ngef: String,
  rsi1_fuse_other: String,
  rsi2_fuse_other: String,
  rsi1_micro_switch: String,
  rsi2_micro_switch: String,
  rsi1_mvsi_qvsi: String,
  rsi2_mvsi_qvsi: String,
  rsi1_hvsi_switch: String,
  rsi2_hvsi_switch: String,
  rsi1_insulation_dc: String,
  rsi2_insulation_dc: String,
  rsi1_insulation_ac: String,
  rsi2_insulation_ac: String,
  
  // HV Test Section
  rsi1_hv_dc_bus: String,
  rsi2_hv_dc_bus: String,
  rsi1_hv_ac_circuit: String,
  rsi2_hv_ac_circuit: String,
  rsi1_hv_control: String,
  rsi2_hv_control: String,
  rsi1_input_current: String,
  rsi2_input_current: String,
  rsi1_current_4bridge: String,
  rsi2_current_4bridge: String,
  rsi1_current_6bridge: String,
  rsi2_current_6bridge: String,
  rsi1_current_7bridge: String,
  rsi2_current_7bridge: String,
  rectifier_remarks: String,
  
  // DC Damping Panel
  dc_rsi1_frame_check: String,
  dc_rsi2_frame_check: String,
  dc_rsi1_cable_replace: String,
  dc_rsi2_cable_replace: String,
  dc_rsi1_crimp_check: String,
  dc_rsi2_crimp_check: String,
  dc_rsi1_resistance_color: String,
  dc_rsi2_resistance_color: String,
  dc_rsi1_resistance_50k: String,
  dc_rsi2_resistance_50k: String,
  dc_rsi1_resistance_1ohm: String,
  dc_rsi2_resistance_1ohm: String,
  dc_rsi1_total_resistance: String,
  dc_rsi2_total_resistance: String,
  dc_rsi1_capacitance: String,
  dc_rsi2_capacitance: String,
  dc_rsi1_connection_tight: String,
  dc_rsi2_connection_tight: String,
  dc_rsi1_insulation_resist: String,
  dc_rsi2_insulation_resist: String,
  dc_damping_remarks: String,
  
  // Modifications
  mod1_status: String,
  mod2_status: String,
  mod3_status: String,
  mod4_status: String,
  mod5_status: String,
  mod6_status: String,
  
  // Fire Prevention Measures
  fire1_status: String,
  fire2_status: String,
  fire3_status: String,
  fire4_status: String,
  fire5_status: String,
  
  // Must Change Items
  item1_status: String,
  item2_status: String,
  item3_status: String
}, {
  timestamps: true
});

module.exports = mongoose.model('rsiCheckSheet', rsiCheckSheetSchema);