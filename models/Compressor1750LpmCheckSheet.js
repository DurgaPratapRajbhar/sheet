const mongoose = require('mongoose');

const compressor1750LpmCheckSheetSchema = new mongoose.Schema({
  // Equipment Info
  type: String,
  make_cp_no: String,
  loco_base: String,
  overhauling_month: String,
  equipment_type: String,
  
  // Test Results - HP Cylinder
  hp_cylinder_hp: String,
  hp_piston_hp: String,
  
  // Test Results - LP Cylinder
  lp_cylinder_lp1: String,
  lp_cylinder_lp2: String,
  lp_piston_lp1: String,
  lp_piston_lp2: String,
  
  // Test Results - Clearance
  clearance_hp_hp: String,
  clearance_lp_lp1: String,
  clearance_lp_lp2: String,
  
  // Test Results - Ring Clearance
  ring_clearance_hp_hp: String,
  ring_clearance_lp_lp1: String,
  ring_clearance_lp_lp2: String,
  
  // Test Results - Crown Clearance
  crown_clearance_hp_hp: String,
  crown_clearance_lp_lp1: String,
  crown_clearance_lp_lp2: String,
  
  // Test Results - Valve
  valve_leakage: String,
  coupling_type: String,
  
  // Test Results - Temperature
  temp_lp1: String,
  temp_lp2: String,
  temp_hp: String,
  temp_aftercooler: String,
  
  // Test Results - Fill Time
  fill_time_ref: String,
  fill_time_actual: String,
  
  // Test Results - Gasket
  gasket_replacement: String,
  
  // Test Results - Light Run Test
  light_run_test: String,
  
  // Test Results - Lubricant
  item_15: String,
  lubricant_remarks: String,
  
  // Test Results - Oil Level
  item_16: String,
  oil_level_ref: String,
  oil_level_remarks: String,
  
  // Test Results - Current/Voltage
  current_reading: String,
  current_remarks: String,
  voltage_reading: String,
  voltage_remarks: String,
  
  // Special Remarks
  special_remarks: String,
  
  // Must Change Items
  desc_header: String,
  status_header: String,
  lp_disc_valve_status: String,
  lp_piston_ring_status: String,
  cylinder_set_status: String,
  connecting_rod_status: String,
  compressor_status: String,
  aoh_kit_status: String,
  ioh_kit_status: String,
  poh_kit_status: String,
  
  // Fire Prevention Measure
  remarks_1: String,
  remarks_2: String,
  remarks_3: String,
  
  // Summer and Monsoon Preparedness
  summer_remarks_1: String,
  
  // Additional Fields
  compressor_sl_no: String,
  hp_cyl_dia_hp: String,
  hp_piston_dia_hp: String,
  lp_cyl_dia_lp1: String,
  lp_cyl_dia_lp2: String,
  lp_piston_dia_lp1: String,
  lp_piston_dia_lp2: String,
  hp_clearance_hp: String,
  lp_clearance_lp1: String,
  lp_clearance_lp2: String,
  hp_ring_clearance_hp: String,
  lp_ring_clearance_lp1: String,
  lp_ring_clearance_lp2: String,
  hp_valve_clearance_hp: String,
  lp_valve_clearance_lp1: String,
  lp_valve_clearance_lp2: String,
  valve_leakage_test: String,
  lp1_temp: String,
  lp2_temp: String,
  hp_temp: String,
  aftercooler_temp: String,
  use_lubricant: String,
  check_oil_ref: String,
  check_oil_result: String,
  current_actual: String,
  current_result: String,
  voltage_actual: String,
  voltage_result: String,
  hp_1: String,
  hp_2: String,
  lp1_3: String,
  lp2_3: String,
  lp1_4: String,
  lp2_4: String,
  hp_9: String,
  lp1_9: String,
  lp2_9: String,
  coupling_10: String,
  time_12: String,
  gaskets_13: String,
  oil_test_14: String,
  oil_level: String,
  remarks_19: String,
  status_1: String,
  pl_no_2: String,
  status_2: String,
  pl_no_3: String,
  status_3: String,
  remarks1: String,
  remarks2: String,
  remarks3: String,
  summer_remarks1: String,
  remarks_1: String,
  remarks_2: String,
  remarks_3: String
}, {
  timestamps: true
});

module.exports = mongoose.model('compressor1750LpmCheckSheet', compressor1750LpmCheckSheetSchema);