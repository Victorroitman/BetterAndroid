/*
 * Better Android - Create more useful tool extensions for Android.
 * Copyright (C) 2019-2023 HighCapable
 * https://github.com/BetterAndroid/BetterAndroid
 *
 * Apache License Version 2.0
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * This file is created by fankes on 2023/12/3.
 */
@file:Suppress("MemberVisibilityCanBePrivate")

package com.highcapable.betterandroid.ui.component.activity.base

import android.graphics.drawable.ColorDrawable
import android.view.View
import android.view.ViewGroup
import androidx.activity.ComponentActivity
import androidx.annotation.CallSuper
import com.highcapable.betterandroid.ui.component.backpress.BackPressedController
import com.highcapable.betterandroid.ui.component.proxy.IBackPressedController
import com.highcapable.betterandroid.ui.component.proxy.ISystemBarsController
import com.highcapable.betterandroid.ui.component.systembar.SystemBarsController
import com.highcapable.betterandroid.ui.extension.widget.inflate

/**
 * Base component activity with [ISystemBarsController], [IBackPressedController].
 *
 * Inherited from [ComponentActivity].
 */
abstract class BaseComponentActivity internal constructor() : ComponentActivity(), ISystemBarsController, IBackPressedController {

    override val systemBars by lazy { SystemBarsController.from(activity = this) }

    override val backPressed by lazy { BackPressedController.from(activity = this) }

    @Deprecated(
        message = "Android has deprecated overriding or calling onBackPressed, " +
            "in the latest system version, please use backPressed.addEvent(...) and backPressed.call(...) to replace it.",
        replaceWith = ReplaceWith("backPressed.call()"),
        level = DeprecationLevel.ERROR
    )
    @Suppress("DEPRECATION", "KotlinRedundantDiagnosticSuppress")
    override fun onBackPressed() {
        super.onBackPressed()
    }

    override fun setContentView(layoutResID: Int) {
        super.setContentView(layoutResID)
        inflate(layoutResID).getBackgroundColor()?.also { systemBars.setBaseBackgroundColor(it) }
    }

    override fun setContentView(view: View?) {
        super.setContentView(view)
        view?.getBackgroundColor()?.also { systemBars.setBaseBackgroundColor(it) }
    }

    override fun setContentView(view: View?, params: ViewGroup.LayoutParams?) {
        super.setContentView(view, params)
        view?.getBackgroundColor()?.also { systemBars.setBaseBackgroundColor(it) }
    }

    @CallSuper
    override fun onDestroy() {
        systemBars.destroy()
        backPressed.destroy()
        super.onDestroy()
    }

    /**
     * Get the background color of the view.
     * @receiver [View]
     * @return [Int] or null.
     */
    internal fun View.getBackgroundColor() = (background as? ColorDrawable)?.color
}