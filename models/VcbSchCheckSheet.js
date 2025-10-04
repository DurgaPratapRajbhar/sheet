const mongoose = require('mongoose');

// Define the VCB SCH Conventional Loco Check Sheet schema with all specific fields
const vcbSchCheckSheetSchema = new mongoose.Schema({
  // Header Information
  date_of_checking: String,
  loco_no: String,
  shed: String,
  vcb_sl_no: String,
  make: String,
  vcb_mfg_date: String,
  poh_date: String,
  
  // Vacuum Circuit Breaker Section
  vacuum_circuit_breaker_reference: String,
  wi_no: String,
  measure_the_contact_travel: String,
  check_the_soundness_of_interrupter: String,
  visually_check_for_cut_cracks_damage_of_porcelain_insulators: String,
  clean_with_wet_cloths_and_let_it_dry: String,
  pressure_switch_close_at: String,
  pressure_switch_opens_at: String,
  setting_of_pressure_regulator: String,
  
  // Auxiliary Switch and Additional Components
  ensure_the_tightness_of_all_fixing_bolt_nuts_connections: String,
  replace_complete_auxiliary_switch_new_one: String,
  replace_filter_element_with_new_one: String,
  change_all_components_provided_in_replacement_kit: String,
  measure_the_coil_resistance_of_magnet_valve: String,
  minimum_operating_voltage_of_magnet_valve: String,
  ensure_the_air_leakage_by_operating_manually: String,
  replace_all_o_ring_and_2_nos_valves: String,
  
  // Air Drier
  replace_old_molecular_sieve: String,
  
  // Electrical Connection
  ensure_the_proper_tightness_of_all_electrical_connection: String,
  
  // Air Piping and Related Tests
  ensure_the_proper_air_pipe_connection: String,
  checked_air_leakage_at_all_joints: String,
  measure_air_leakage_at_6_5_kg_cm_for_10_minute: String,
  replace_old_with_new_one: String,
  replace_all_o_ring_and_ptfe_valve_disc: String,
  replace_old_piston_seals_ring: String,
  replace_old_poppet_valve: String,
  replace_one_no_damper_assembly: String,
  lubricate_relay_valve_assembly: String,
  
  // Insulation Test
  control_wiring_to_frame: String,
  vcb_terminal_to_earth: String,
  
  // Sequence Test
  set_the_regulator_at_3_2_kg_cm: String,
  repeat_the_above_test_at_pressure_6_2_kg_cm: String,
  on_a_falling_pressure_check_contacts: String,
  
  // Contact Travel Measurement
  closing_time: String,
  opening_time: String,
  
  // RC Damping Panel
  dampage_panelsln1: String,
  dampage_panelslnmake1: String,
  dampage_panelslnmfg1: String,
  dampage_panelsln2: String,
  dampage_panelslnmake1_2: String,
  dampage_panelslnmfg2: String,
  dampage_panelsln3: String,
  dampage_panelslnmake3: String,
  dampage_panelslnmfg3: String,
  ensure_the_proper_tightness_of_electrical_connection: String,
  r1: String,
  r2: String,
  r3: String,
  c1: String,
  c2: String,
  c3: String,
  replace_old_rc_panel_with_new_one: String,
  
  // Cable Head Termination
  cht_manufacturing_detailsmake: String,
  cht_manufacturing_detailssl: String,
  cht_manufacturing_details: String,
  visually_check_for_any_cut_mark_cracks_and_damage_of_cht: String,
  ensure_the_healthiness_of_earthing_shunt_and_connection: String,
  clean_the_entire_cht: String,
  change_the_self_bonding_tape_and_silicon_tape: String,
  measure_the_insulation_resistance_value_by_5kv_megger: String,
  
  // Main Earthing Switch
  hom_manufacturing_make: String,
  hom_manufacturing_serno: String,
  hom_manufacturing_details: String,
  cleaning_and_painting_to_be_done: String,
  ensure_continuity_of_contacts_of_programme_switch_in_closed_condition: String,
  ensure_discontinuity_of_contacts_of_programme_switch_in_opened_condition: String,
  ensure_air_leakage_from_air_valve_when_hom_in_off_and_on_position: String,
  ensure_continuity_of_air_supply_when_hom_in_on_condition: String,
  ensure_discontinuity_of_air_supply_when_hom_off: String,
  check_key_lock_when_hom_in_off_condition: String,
  
  // Gapeless Lightning Arrester
  gapeless_lightning_arrester_reference: String,
  clean_the_entire_la_and_base: String,
  measure_the_insulation_resistance_by_1kv_megger: String,
  measure_the_third_harmonic_resistive_leakage_current_test: String,
  
  // High Voltage Bushing
  high_voltage_bushing_reference: String,
  clean_the_hv_bushing_micafill_fins: String,
  measure_the_tan_delta_at_10_kv: String,
  
  // Primary Voltage Transformer
  primary_voltage_transformer_reference: String,
  clean_the_entire_primary_voltage_transformer: String,
  measure_the_primary_side_resistance_value: String,
  measure_the_secondary_side_resistance_value: String,
  measure_the_insulation_resistance_on_secondary_side: String,
  measure_the_insulation_resistance_on_primary_side: String,
  
  // Must Change Items
  rc_damping_panel_status: String,
  poh_kit_vcb_status: String,
  pressure_switch_status: String,
  maintenance_kit_cht_status: String,
  way_cock_air_valve_status: String,
  programme_switch_hom_status: String,
  
  // Status of SMI/MS/TC
  modification_earthing_switch_status: String,
  overhauling_kits_status: String,
  loctite_518_status: String,
  rtv_1080_status: String,
  air_drier_maintenance_status: String,
  cht_reliability_status: String,
  
  // Remarks Section
  remarks: String
}, {
  timestamps: true
});

module.exports = mongoose.model('vcbSchConventionalLoco', vcbSchCheckSheetSchema);