desc "Save the latest rates to db"
task :save_latest_rates => :environment do
  SaveLatestRates.call
  puts "Saved latest rates"
end
