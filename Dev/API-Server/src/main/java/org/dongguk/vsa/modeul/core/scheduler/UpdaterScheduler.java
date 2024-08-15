package org.dongguk.vsa.modeul.core.scheduler;

import lombok.RequiredArgsConstructor;
import org.dongguk.vsa.modeul.core.annotation.TaskScheduler;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.scheduling.concurrent.ThreadPoolTaskScheduler;

import java.time.Instant;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ScheduledFuture;

@TaskScheduler
@RequiredArgsConstructor
public class UpdaterScheduler implements InitializingBean {

    private final ThreadPoolTaskScheduler threadPoolTaskScheduler;

    private static Map<Long, ScheduledFuture<?>> modeullakTasks;

    @Override
    public void afterPropertiesSet() {
        modeullakTasks =  new ConcurrentHashMap<>();
    }

    public void addModeullakTask(Long modeullakId, Runnable task, Instant instant) {
        ScheduledFuture<?> scheduledFuture = threadPoolTaskScheduler.schedule(task, instant);

        modeullakTasks.put(modeullakId, scheduledFuture);
    }

    public void removeModeullakTask(Long modeullakId) {
        ScheduledFuture<?> scheduledFuture = modeullakTasks.get(modeullakId);

        if (scheduledFuture != null) {
            scheduledFuture.cancel(false);
            modeullakTasks.remove(modeullakId);
        }
    }
}
