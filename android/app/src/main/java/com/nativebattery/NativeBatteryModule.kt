package com.nativebattery

import android.content.Context
import android.os.BatteryManager
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext

class NativeBatteryModule(reactContext: ReactApplicationContext) : NativeBatterySpec(reactContext) {
    override fun getName() = NAME

    override fun getBatteryStatus(promise: Promise?) {
        try {
            val batteryManager = reactApplicationContext.getSystemService(Context.BATTERY_SERVICE) as BatteryManager
            val status = if (batteryManager.isCharging) "CHARGING" else "NOT_CHARGING"
            promise?.resolve(status)
        } catch (e: Exception) {
            promise?.reject("BATTERY_STATUS_ERROR", "Failed to get battery status", e)
        }
    }

    override fun getBatteryLevel(promise: Promise?) {
        try {
            val batteryManager = reactApplicationContext.getSystemService(Context.BATTERY_SERVICE) as BatteryManager
            val batteryLevel = batteryManager.getIntProperty(BatteryManager.BATTERY_PROPERTY_CAPACITY)
            promise?.resolve(batteryLevel)
        } catch (e: Exception) {
            promise?.reject("BATTERY_LEVEL_ERROR", "Failed to get battery level", e)
        }
    }

    companion object {
        const val NAME = "NativeBattery"
    }
}