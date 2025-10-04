const mongoose = require('mongoose');

// Define the VCB AAL Conventional Loco Check Sheet schema with all specific fields
const vcbAalCheckSheetSchema = new mongoose.Schema({
  // Header Information
  loco_no: String,
  shed: String,
  vcb_sl_no: String,
  make: String,
  mfg_date: String,
  poh_date: String,
  
  // Insulator Section
  insulatoridbtanula: String,
  insulatordoc1: String,
  insulator_check1: String,
  insulator_check2: String,
  
  // Pressure Switch Section
  pressure_switch1: String,
  pressure_switch2: String,
  pressure_switch3: String,
  
  // Pressure Regulator Section
  pressure_reg1: String,
  pressure_reg2: String,
  pressure_reg3: String,
  
  // Auxiliary Switch Section
  aux_no: String,
  aux_nc: String,
  aux_switch1: String,
  aux_switch2: String,
  aux_switch3: String,
  aux_switch4: String,
  aux_switch5: String,
  
  // Air Tank Section
  air_tank1: String,
  
  // Magnet Valve Section
  pickup: String,
  dropout: String,
  aal_coil_no: String,
  aal_resistance: String,
  bt_coil_no: String,
  bt_resistance1: String,
  bt_resistance2: String,
  
  // Air Drier Section
  replace_old_molecular_sieve: String,
  
  // Cabling and Connector Section
  visually_check_for_any_damage_cut_and_tightness_of_connectors_connections_pins_etc_including_pressure_switch_and_solenoid_valve: String,
  
  // Pneumatic Circuit Section
  ensure_the_proper_air_pipe_connection: String,
  ensure_the_sealing_of_connectors_flexible_pipe_regulator_air_tank_etc: String,
  
  // Lateral Cover Section
  replace_the_kit_of_o_ring_of_lateral_cover: String,
  
  // Electrical Control Unit Section
  ensure_the_cleanliness_of_control_unit: String,
  ensure_the_proper_operation_of_counter: String,
  
  // Toggle Mechanism Section
  ensure_the_proper_fixing_sticking_of_shock_absorber_plate_provided_below_toggle_mechanism: String,
  
  // Shock Absorber Section
  ensure_the_tightness_of_shock_absorber_if_found_loose_tighten_with_proper_torque_10_nm: String,
  
  // Insulation Test Section
  control_wiring_to_frame: String,
  vcb_terminal_to_earth: String,
  
  // Vacuum Switch Tube Section
  vst_dielectric_test: String,
  closing_opening_time: String,
  
  // Lubrication Section
  lubricate_toggle_mechanism: String,
  lubricate_shafting_head_bearing: String,
  
  // RC Damping Panel Section
  sl1_make: String,
  sl1_mfg: String,
  sl1_additional1: String,
  sl1_additional2: String,
  sl2_make: String,
  sl2_mfg: String,
  sl2_additional1: String,
  sl2_additional2: String,
  sl3_make: String,
  sl3_mfg: String,
  sl3_additional1: String,
  sl3_additional2: String,
  equipment_info_result: String,
  electrical_connection_tightness: String,
  resistance_r1: String,
  resistance_r2: String,
  resistance_r3: String,
  capacitance_c1: String,
  capacitance_c2: String,
  capacitance_c3: String,
  replace_old_rc_panel: String,
  
  // Cable Head Termination Section
  cable_head_termination_mfg_dt: String,
  visual_check_cht: String,
  earthing_shunt_check: String,
  clean_cht: String,
  change_tapes: String,
  insulation_resistance: String,
  
  // Main Earthing Switch Section
  main_earthing_switch_mfg_dt: String,
  cleaning_painting: String,
  continuity_closed: String,
  discontinuity_opened: String,
  air_leakage_check: String,
  air_supply_continuity: String,
  air_supply_discontinuity: String,
  key_lock_check: String,
  
  // Gapeless Lightning Arrester Section
  gapeless_lightning_arrester_la01_make: String,
  gapeless_lightning_arrester_la02_make: String,
  gapeless_lightning_arrester_la01_sl_no: String,
  gapeless_lightning_arrester_la02_sl_no: String,
  gapeless_lightning_arrester_la01_mfg: String,
  gapeless_lightning_arrester_la02_mfg: String,
  gapeless_lightning_arrester_cleaning_result: String,
  gapeless_lightning_arrester_insulation_resistance: String,
  gapeless_lightning_arrester_harmonic_current: String,
  
  // High Voltage Bushing Section
  high_voltage_bushing_make: String,
  high_voltage_bushing_sl_no: String,
  high_voltage_bushing_mfg_dt: String,
  high_voltage_bushing_cleaning_result: String,
  high_voltage_bushing_tan_delta: String,
  
  // Primary Voltage Transformer Section
  primary_voltage_transformer_make: String,
  primary_voltage_transformer_sl_no: String,
  primary_voltage_transformer_mfg_dt: String,
  primary_voltage_transformer_cleaning_result: String,
  primary_voltage_transformer_primary_resistance: String,
  primary_voltage_transformer_secondary_resistance: String,
  primary_voltage_transformer_secondary_insulation: String,
  primary_voltage_transformer_primary_insulation: String,
  
  // Must Change Items Section
  tc123_1: String,
  tc123_2: String,
  tc123_3: String,
  tc123_4: String,
  tc123_5: String,
  tc123_6: String,
  tc123_7: String,
  smi_1: String,
  smi_2: String,
  smi_3: String,
  smi_4: String,
  smi_5: String,
  
  // Remarks Section
  remarks: String
}, {
  timestamps: true
});

module.exports = mongoose.model('vcbAalConventionalLoco', vcbAalCheckSheetSchema);