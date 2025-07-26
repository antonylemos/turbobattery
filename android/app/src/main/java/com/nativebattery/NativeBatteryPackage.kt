package com.nativebattery

import com.facebook.react.BaseReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.model.ReactModuleInfo
import com.facebook.react.module.model.ReactModuleInfoProvider

class NativeBatteryPackage : BaseReactPackage() {
    override fun getModule(name: String, reactContext: ReactApplicationContext): NativeModule? {
        return if (name == NativeBatteryModule.NAME) {
            NativeBatteryModule(reactContext)
        } else {
            null
        }
    }

    override fun getReactModuleInfoProvider() = ReactModuleInfoProvider {
        mapOf(
            NativeBatteryModule.NAME to ReactModuleInfo(
                NativeBatteryModule.NAME,
                NativeBatteryModule.NAME,
                false,
                false,
                false,
                true
            )
        )
    }
}